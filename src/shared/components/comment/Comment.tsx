import * as styles from "./Comment.css";
import type { CommentData } from './types/comment';
import { getRelativeTime } from './utils/dateUtils';
import Ic_User_Solid from '@svg/ic_user_solid.svg';

interface CommentProps {
  currentUserId?: number;
  comment: CommentData;
  onDelete?: (commentId: number) => void;
}

export default function Comment({
  currentUserId,
  comment,
  onDelete,
}: CommentProps) {
  const isAuthor = currentUserId === comment.author.userId;

  const handleDelete = () => {
    if (onDelete && window.confirm('댓글을 삭제하시겠습니까?')) {
      onDelete(comment.id);
    }
  };

  return (
    <div className={styles.commentWrapper}>
      <div className={styles.commentHeader}>
        <div className={styles.authorInfo}>
          <div className={styles.authorAvatar}>
            <img src={Ic_User_Solid} alt='user icon' width={26} />
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
      <div className={styles.commentContent}>
        {comment.content}
      </div>
    </div>
  );
}
