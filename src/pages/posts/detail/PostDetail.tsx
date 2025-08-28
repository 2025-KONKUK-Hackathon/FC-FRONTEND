import { useEffect, useState, useCallback } from 'react';
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
import { usePostDetail } from './hooks/usePostDetail';
import { usePostMutations } from './hooks/usePostMutations';

export default function PostDetail() {
  const navigator = useNavigate();

  const handleBackClick = () => {
    navigator(-1);
  };

  const { id } = useParams();
  const postId = Number(id);
  
  const {
    addCommentMutation,
    deleteCommentMutation,
    scrapPostMutation,
    deletePostMutation
  } = usePostMutations(postId);

  const handleAddCommentClick = () => {
    // 댓글 작성
    addCommentMutation.mutate({ postId, content: commentContent });
    setCommentContent('');
  };

  const handleScrapClick = () => {
    // 게시글 스크랩
    scrapPostMutation.mutate(postId);
  };

  const handleCommentDeleteClick = (commentId: number) => {
    // 댓글 삭제
    deleteCommentMutation.mutate(commentId);
  };

  const handleDeletePostClick = () => {
    // 게시글 삭제
    if (isAuthor && postDetail) {
      deletePostMutation.mutate(postId);
    }
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

  const { postDetail, commentsData } = usePostDetail(Number(id));
  const [scrapped, setScrapped] = useState<boolean>(false);
  const [imageContainerRef, setImageContainerRef] = useState<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [commentContent, setCommentContent] = useState<string>('');

  const checkScrollPosition = useCallback(() => {
    if (imageContainerRef) {
      const { scrollLeft, scrollWidth, clientWidth } = imageContainerRef;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, [imageContainerRef]);

  const currentUserId = Number(localStorage.getItem('userId'));
  const isAuthor = postDetail ? currentUserId === postDetail.writerId : false;

  useEffect(() => {
    if (imageContainerRef) {
      checkScrollPosition();
      imageContainerRef.addEventListener('scroll', checkScrollPosition);
      return () => {
        imageContainerRef.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, [imageContainerRef, checkScrollPosition]);

  return (
    <div className={styles.postDetailWrapper}>
      <div className={styles.postHeader}>
        <Ic_chevron_left_white className={styles.headerButton} onClick={handleBackClick} />
      </div>
      <div className={styles.postContentWrapper}>
        <div className={styles.postTitleContainer}>
          <span className={styles.postTitle}>{postDetail?.title}</span>
          {isAuthor ? (
            <Ic_trash_white className={styles.headerButton} onClick={handleDeletePostClick} />
          ) : (
            <button type="button" onClick={handleScrapClick}>
              {scrapped 
                ? <Ic_bookmark_solid className={styles.headerButton} />
                : <Ic_bookmark className={styles.headerButton} />
              }
            </button>
          )}
        </div>

        <div className={styles.postMeta}>
          <span className={styles.writerName}>{postDetail?.writerName}</span>
          <span className={styles.createdAt}>{postDetail?.createdAt && formatDate(postDetail.createdAt)}</span>
        </div>

        <div className={styles.keywordsContainer}>
          {postDetail?.grade && (
            <Category
              text={GRADE_CATEGORY[postDetail?.grade].text}
              icon={GRADE_CATEGORY[postDetail?.grade].icon}
              color={GRADE_CATEGORY[postDetail?.grade].color}
              size="medium"
            />
          )}
          {postDetail?.affiliation && (
            <Category text={AFFILIATION[postDetail?.affiliation]} icon="💻" color="Yellow" size="medium" />
          )}
          {postDetail?.part && (
            <Category
              text={PART_CATEGORY[postDetail?.part].text}
              icon={PART_CATEGORY[postDetail?.part].icon}
              color={PART_CATEGORY[postDetail.part].color}
              size="medium"
            />
          )}
          {postDetail?.topic && (
            <Category
              text={SUBJECT_CATEGORY[postDetail.topic].text}
              icon={SUBJECT_CATEGORY[postDetail.topic].icon}
              color={SUBJECT_CATEGORY[postDetail.topic].color}
              size="medium"
            />
          )}
        </div>

        {postDetail?.imageUrls && postDetail?.imageUrls.length > 1 && (
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
              {postDetail.imageUrls.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`${postDetail.title} 이미지 ${index + 1}`}
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

        {postDetail?.imageUrls && postDetail.imageUrls.length === 1 && (
          <div className={styles.imageContainer}>
            {postDetail.imageUrls.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`${postDetail.title} 이미지 ${index + 1}`}
                className={styles.postImage}
              />
            ))}
          </div>
        )}

        <div className={styles.postContent}>{postDetail?.content}</div>
      </div>

      <div className={styles.commentsWrapper}>
        <span className={styles.commentsCount}>댓글 {postDetail?.commentCount || 0}개</span>

        <div className={styles.commentList}>
          {commentsData?.content?.map((comment) => (
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
              onDelete={handleCommentDeleteClick}
            />
          ))}
        </div>

        <div className={styles.commentInputWrapper}>
          <div className={styles.commentInputContainer}>
            <Input 
              placeholder="댓글을 입력하세요." 
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
            />
          </div>
          <Button 
            text="등록" 
            size="medium" 
            onClick={handleAddCommentClick}
            disabled={addCommentMutation.isPending}
          />
        </div>
      </div>
    </div>
  );
}
