import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as styles from './PostDetail.css';
import Category from '@shared/components/category/Category';
import Comment from '@shared/components/comment/Comment';
import Input from '@shared/components/input/Input';
import Button from '@shared/components/button/Button';
import {
  Ic_chevron_left_white,
  Ic_trash_white,
  Ic_bookmark,
  Ic_bookmark_solid,
  Ic_chevron_left,
  Ic_chevron_right,
} from '@svg/index';
import { formatDate } from './utils/formatDate';
import { GRADE_CATEGORY } from '@shared/constant/grade';
import { PART_CATEGORY } from '@shared/constant/part';
import { SUBJECT_CATEGORY } from '@shared/constant/subject';
import { AFFILIATION } from './constant/PostKeyword';
import type { PostDetailData } from './types/postTypes';
import { postDetailMock, postCommentMock } from './constant/PostDetailDummy';

export default function PostDetail() {
  const navigator = useNavigate();

  const handleBackClick = () => {
    navigator(-1);
  };

  const handleDeleteClick = () => {
    // 게시글 삭제
    alert('게시글을 삭제합니다.');
    navigator(-1);
  };

  const handleScrapClick = () => {
    // 게시글 스크랩
    setScrapped(!scrapped);
  };

  const handleAddCommentClick = () => {
    // 댓글 추가
  };

  const handleScrollLeft = () => {
    if (imageContainerRef) {
      imageContainerRef.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (imageContainerRef) {
      imageContainerRef.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const checkScrollPosition = () => {
    if (imageContainerRef) {
      const { scrollLeft, scrollWidth, clientWidth } = imageContainerRef;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostDetailData | null>(null);
  const [scrapped, setScrapped] = useState<boolean>(false);
  const [imageContainerRef, setImageContainerRef] = useState<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // 예시: 현재 로그인한 사용자의 ID
  const currentUserId = 123;
  const isAuthor = post ? currentUserId === post.writerId : false;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setPost(postDetailMock);
      } catch {
        console.error('게시글 불러오기 실패');
      }
    };
    fetchPost();
  }, [id]);

  useEffect(() => {
    if (imageContainerRef) {
      checkScrollPosition();
      imageContainerRef.addEventListener('scroll', checkScrollPosition);
      return () => {
        imageContainerRef.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, [imageContainerRef]);

  return (
    <div className={styles.postDetailWrapper}>
      <div className={styles.postHeader}>
        <Ic_chevron_left_white className={styles.headerButton} onClick={handleBackClick} />
      </div>
      <div className={styles.postContentWrapper}>
        <div className={styles.postTitleContainer}>
          <span className={styles.postTitle}>{post?.title}</span>
          {isAuthor ? (
            <Ic_trash_white className={styles.headerButton} onClick={handleDeleteClick} />
          ) : (
            <button type="button" onClick={handleScrapClick}>
              {scrapped ? (
                <Ic_bookmark_solid className={styles.headerButton} />
              ) : (
                <Ic_bookmark className={styles.headerButton} />
              )}
            </button>
          )}
        </div>

        <div className={styles.postMeta}>
          <span className={styles.writerName}>{post?.writerName}</span>
          <span className={styles.createdAt}>{post?.createdAt && formatDate(post.createdAt)}</span>
        </div>

        <div className={styles.keywordsContainer}>
          {post?.grade && (
            <Category
              text={GRADE_CATEGORY[post.grade].text}
              icon={GRADE_CATEGORY[post.grade].icon}
              color={GRADE_CATEGORY[post.grade].color}
              size="medium"
            />
          )}
          {post?.affiliation && (
            <Category text={AFFILIATION[post.affiliation]} icon="💻" color="Yellow" size="medium" />
          )}
          {post?.part && (
            <Category
              text={PART_CATEGORY[post.part].text}
              icon={PART_CATEGORY[post.part].icon}
              color={PART_CATEGORY[post.part].color}
              size="medium"
            />
          )}
          {post?.topic && (
            <Category
              text={SUBJECT_CATEGORY[post.topic].text}
              icon={SUBJECT_CATEGORY[post.topic].icon}
              color={SUBJECT_CATEGORY[post.topic].color}
              size="medium"
            />
          )}
        </div>

        {post?.imageUrls && post.imageUrls.length > 1 && (
          <div className={styles.imageWrapper}>
            {canScrollLeft && (
              <button
                type="button"
                className={`${styles.scrollButton} ${styles.scrollButtonLeft}`}
                onClick={handleScrollLeft}
                aria-label="왼쪽 스크롤"
              >
                <Ic_chevron_left className={styles.scrollButtonIcon} />
              </button>
            )}
            <div className={styles.imageContainer} ref={setImageContainerRef}>
              {post.imageUrls.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`${post.title} 이미지 ${index + 1}`}
                  className={styles.postImage}
                />
              ))}
            </div>
            {canScrollRight && (
              <button
                type="button"
                className={`${styles.scrollButton} ${styles.scrollButtonRight}`}
                onClick={handleScrollRight}
                aria-label="오른쪽 스크롤"
              >
                <Ic_chevron_right className={styles.scrollButtonIcon} />
              </button>
            )}
          </div>
        )}

        {post?.imageUrls && post.imageUrls.length === 1 && (
          <div className={styles.imageContainer}>
            {post.imageUrls.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`${post.title} 이미지 ${index + 1}`}
                className={styles.postImage}
              />
            ))}
          </div>
        )}

        <div className={styles.postContent}>{post?.content}</div>
      </div>

      <div className={styles.commentsWrapper}>
        <span className={styles.commentsCount}>댓글 {post?.commentCount || 0}개</span>

        <div className={styles.commentList}>
          {postCommentMock.map(commentData =>
            commentData.content.map(comment => (
              <Comment
                key={comment.commentId}
                currentUserId={currentUserId || 0}
                comment={{
                  id: comment.commentId,
                  author: {
                    userName: comment.writerName,
                    userId: comment.writerId,
                  },
                  content: comment.content,
                  createdAt: new Date(comment.createdAt),
                }}
              />
            ))
          )}
        </div>

        <div className={styles.commentInputWrapper}>
          <div className={styles.commentInputContainer}>
            <Input placeholder="댓글을 입력하세요." />
          </div>
          <Button text="등록" size="medium" onClick={handleAddCommentClick} />
        </div>
      </div>
    </div>
  );
}
