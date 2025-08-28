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
import { useIntersectionObserver } from '@shared/hooks/useIntersectionObserver';
import LoadingSvg from '@shared/components/loading/Loading';

export default function PostDetail() {
  const navigator = useNavigate();

  const handleBackClick = () => {
    navigator(-1);
  };

  const { id } = useParams();


  const { 
    postDetail,
    // commentsData,
    commentsResult,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage
  } = usePostDetail(id || "");
  const {
    addCommentMutation,
    deleteCommentMutation,
    scrapPostMutation,
    deletePostMutation
  } = usePostMutations(id || "");

  const handleAddCommentClick = () => {
    // 댓글 작성
    const content = commentContent.trim();
    if (!id || !content) return;
    addCommentMutation.mutate(
      { postId:id, content },
      { onSuccess: () => setCommentContent('') }
    );
  };

  const handleScrapClick = () => {
    // 게시글 스크랩
    if (!id || postDetail?.isScrapped) return;
    scrapPostMutation.mutate(id);
  };

  const handleCommentDeleteClick = (commentId: string) => {
    // 댓글 삭제
    deleteCommentMutation.mutate(commentId);
  };

  const handleDeletePostClick = () => {
    // 게시글 삭제
    if (!isAuthor || !postDetail) return;
    if (window.confirm('정말로 이 게시글을 삭제하시겠습니까?')) {
      deletePostMutation.mutate(id || "", { onSuccess: () => navigator(-1) });
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

  // 무한스크롤 trigger
  const { targetRef } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px',
    onIntersect: () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

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
            <button type="button" onClick={handleScrapClick} disabled={postDetail?.isScrapped}>
              {postDetail?.isScrapped
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
          {postDetail && postDetail.grade !== undefined && (
            <Category
              text={GRADE_CATEGORY[postDetail.grade].text}
              icon={GRADE_CATEGORY[postDetail.grade].icon}
              color={GRADE_CATEGORY[postDetail.grade].color}
              size="medium"
            />
          )}
          {postDetail?.affiliation && (
            <Category text={AFFILIATION[postDetail.affiliation]} icon="💻" color="Yellow" size="medium" />
          )}
          {postDetail && postDetail.part !== undefined && (
            <Category
              text={PART_CATEGORY[postDetail.part].text}
              icon={PART_CATEGORY[postDetail.part].icon}
              color={PART_CATEGORY[postDetail.part].color}
              size="medium"
            />
          )}
          {postDetail && postDetail.topic !== undefined && (
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
          {postDetail.imageUrls && postDetail.imageUrls.length > 0 && 
            <div className={styles.imageContainer} ref={setImageContainerRef}>
              {postDetail.imageUrls.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`${postDetail.title} 이미지 ${index + 1}`}
                  className={styles.postImage}
                />
              ))}
            </div>}
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
          {commentsResult?.content.map((commentItem) => (
            <Comment
              key={commentItem.commentId}
              currentUserId={currentUserId || 0}
              comment={{
                  id: commentItem.commentId,
                  author: {
                    userName: commentItem.writerName,
                    userId: commentItem.writerId,
                  },
                  content: commentItem.content,
                  createdAt: new Date(commentItem.createdAt),
                }}
                onDelete={handleCommentDeleteClick}
              />
            ))}
          
          {/* 무한스크롤 트리거 */}
          <div ref={targetRef} style={{ height: '20px' }} />

          {/* 로딩 인디케이터 */}
          {/* todo: 무한스크롤용 로딩 인디케이터 추가하기 */}
          {isFetchingNextPage && (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
              <LoadingSvg />
            </div>
          )}
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
            disabled={addCommentMutation.isPending || commentContent.trim().length === 0}
          />
        </div>
      </div>
    </div>
  );
}
