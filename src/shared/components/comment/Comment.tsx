import { useState } from 'react';
import * as styles from "./Comment.css";
import type { CommentData, CommentActionProps, CommentVariant } from './types/comment';
import { getRelativeTime } from './utils/dateUtils';
import ReplyForm from './ReplyForm';

interface CommentProps {
  currentUserId?: number;
  comment: CommentData;
  variant?: CommentVariant;
  allowReply?: boolean;
  onDelete?: CommentActionProps['onDelete'];
  onLike?: CommentActionProps['onLike'];
  onReply?: CommentActionProps['onReply'];
}

export default function Comment({
  currentUserId,
  comment,
  variant = 'default',
  allowReply = true,
  onDelete,
  onLike,
  onReply,
}: CommentProps) {
  const [isReplying, setIsReplying] = useState(false);

  const isAuthor = currentUserId === comment.author.userId;
  const hasReplies = comment.replies && comment.replies.length > 0;

  const handleReplySubmit = (content: string) => {
    if (onReply) {
      onReply(comment.id, content);
      setIsReplying(false);
    }
  };

  const handleLike = () => {
    if (onLike) {
      onLike(comment.id);
    }
  };

  const handleDelete = () => {
    if (onDelete && window.confirm('댓글을 삭제하시겠습니까?')) {
      onDelete(comment.id);
    }
  };

  return (
    <div className={styles.commentWrapper({ variant })}>
      {/* 댓글 헤더 */}
      <div className={styles.commentHeader}>
        <div className={styles.authorInfo}>
          <div className={styles.authorAvatar}>
            {comment.author.userName.charAt(0)}
          </div>
          <div className={styles.authorDetails}>
            <div className={styles.authorName}>
              {comment.author.userName}
            </div>
            <div className={styles.commentDate}>
              {getRelativeTime(comment.createdAt)}
            </div>
          </div>
        </div>

        {isAuthor && (
          <button
            type='button'
            className={styles.actionButton}
            onClick={handleDelete}
          >
            🗑️
          </button>
        )}
      </div>

      {/* 댓글 내용 */}
      <div className={styles.commentContent}>
        {comment.content}
      </div>

      {/* 댓글 푸터 */}
      <div className={styles.commentFooter}>
        <button
          className={styles.likeButton({ isLiked: comment.isLiked })}
          onClick={handleLike}
        >
          {comment.isLiked ? '❤️' : '🤍'} {comment.likes || 0}
        </button>
        {allowReply && (
          <button
            className={styles.actionButton}
            onClick={() => setIsReplying(!isReplying)}
          >
            💬 답글
          </button>
        )}
      </div>

      {/* 답글 작성 */}
      {isReplying && (
        <ReplyForm
          onSubmit={handleReplySubmit}
          onCancel={() => setIsReplying(false)}
        />
      )}

      {/* 답글 목록 */}
      {hasReplies && (
        <div className={styles.repliesContainer}>
          {comment.replies!.map((reply) => (
            <Comment
              key={reply.id}
              currentUserId={currentUserId}
              comment={reply}
              variant='reply'
              allowReply={false}
              onDelete={onDelete}
              onLike={onLike}
            />
          ))}
        </div>
      )}
    </div>
  );
}
