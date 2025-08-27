import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as styles from './PostDetail.css';
import Category from '@shared/components/category/Category';
import Comment from '@shared/components/comment/Comment';
import Input from '@shared/components/input/Input';
import Button from '@shared/components/button/Button';
import { Ic_chevron_left_white, Ic_trash_white } from '@svg/index';
import { formatDate } from './utils/formatDate';
import { GRADE, AFFILIATION, PART, TOPIC } from './constant/PostKeyword';
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

  const handleAddCommentClick = () => {
    // 댓글 추가
  };

  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostDetailData | null>(null);

  // 예시: 현재 로그인한 사용자의 ID
  const currentUserId = 123;
  const isAuthor = post ? currentUserId === post.writerId : false;

  useEffect(() => {
    // 페이지 진입 시 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    const fetchPost = async () => {
      try {
        setPost(postDetailMock);
      } catch {
        console.error('게시글 불러오기 실패');
      }
    };
    fetchPost();
  }, [id]);

  return (
    <div className={styles.postDetailWrapper}>
      <div className={styles.postHeader}>
        <button type='button' className={styles.headerButton} onClick={handleBackClick}>
          <Ic_chevron_left_white style={{ width: '2rem', height: '2rem' }} />
        </button>
        {isAuthor && (
          <button type='button' className={styles.headerButton} onClick={handleDeleteClick}>
            <Ic_trash_white style={{ width: '2rem', height: '2rem' }} />
          </button>
        )}
      </div>

      <div className={styles.keywordsContainer}>
        {post?.grade && <Category text={GRADE[post.grade]} icon='🎓' color='Pink' size='medium' />}
        {post?.affiliation && <Category text={AFFILIATION[post.affiliation]} icon='💻' color='Yellow' size='medium' />}
        {post?.part && <Category text={PART[post.part]} icon='🌐' color='Mint' size='medium' />}
        {post?.topic && <Category text={TOPIC[post.topic]} icon='📚' color='Purple' size='medium' />}
      </div>

      <span className={styles.postTitle}>{post?.title}</span>
      
      <div className={styles.postMeta}>
        <span className={styles.writerName}>{post?.writerName}</span>
        <span className={styles.createdAt}>{post?.createdAt && formatDate(post.createdAt)}</span>
      </div>

      {post?.imageUrls && post.imageUrls.length > 0 && (
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

      <div className={styles.commentsContainer}>
        <span className={styles.commentsCount}>댓글 {post?.commentCount || 0}개</span>

        <div className={styles.commentList}>
          {postCommentMock.map((commentData) => 
            commentData.content.map((comment) => (
              <Comment
                key={comment.commentId}
                currentUserId={currentUserId || 0}
                comment={{
                  id: comment.commentId,
                  author: {
                    userName: comment.writerName,
                    userId: comment.writerId
                  },
                  content: comment.content,
                  createdAt: new Date(comment.createdAt)
                }}
              />
            ))
          )}
        </div>

        <div className={styles.commentInputWrapper}>
          <div className={styles.commentInputContainer}>
            <Input placeholder='댓글을 입력하세요.' />
          </div>
          <Button text='등록' size='medium' onClick={handleAddCommentClick} />
        </div>
      </div>
    </div>
  );
}
