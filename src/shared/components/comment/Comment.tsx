import * as styles from './Comment.css';
import type { CommentData } from './types/comment';
import { getRelativeTime } from './utils/dateUtils';
import { Ic_user } from '@svg/index';

interface CommentProps {
  currentUserId?: number;
  comment: CommentData;
  onDelete?: (commentId: string) => void;
}

export default function Comment({ currentUserId, comment, onDelete }: CommentProps) {
  const isAuthor = currentUserId === comment.author.userId;

  const handleDelete = () => {
    if (onDelete && window.confirm('댓글을 삭제하시겠습니까?')) {
      onDelete(String(comment.id));
    }
  };

  return (
    <div className={styles.commentWrapper}>
      <div className={styles.commentHeader}>
        <div className={styles.authorInfo}>
          <Ic_user className={styles.authorAvatarIcon} />
          <div className={styles.authorDetails}>
            <div className={styles.authorName}>{comment.author.userName}</div>
            <div className={styles.commentDate}>{getRelativeTime(comment.createdAt)}</div>
          </div>
        </div>
        {isAuthor && (
          <button type="button" className={styles.actionButton} onClick={handleDelete}>
            🗑️
          </button>
        )}
      </div>
      <div className={styles.commentContent}>{comment.content}</div>
    </div>
  );
}
