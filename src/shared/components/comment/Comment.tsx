import * as styles from './Comment.css';
import type { CommentData } from './types/comment';
import { getRelativeTime } from './utils/dateUtils';
import { Ic_user, Ic_trash_white } from '@svg/index';
import ConfirmModal from '@shared/components/confirmModal/ConfirmModal';
import { useState } from 'react';

interface CommentProps {
  currentUserId?: number;
  comment: CommentData;
  onDelete?: (commentId: string) => void;
}

export default function Comment({ currentUserId, comment, onDelete }: CommentProps) {
  const isAuthor = currentUserId === comment.author.userId;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (onDelete) {
      onDelete(String(comment.id));
    }
    setIsModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
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
          <button type="button" className={styles.actionButton} onClick={handleDeleteClick}>
            <Ic_trash_white />
          </button>
        )}
      </div>
      <div className={styles.commentContent}>{comment.content}</div>
      
      <ConfirmModal
        isOpen={isModalOpen}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="댓글을 삭제하시겠어요?"
      />
    </div>
  );
}
