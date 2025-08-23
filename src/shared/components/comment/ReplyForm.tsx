import { useState } from 'react';
import * as styles from "./Comment.css";
import { vars } from '@styles/theme.css';

interface ReplyFormProps {
  onSubmit: (content: string) => void;
  onCancel: () => void;
  placeholder?: string;
}

export default function ReplyForm({
  onSubmit,
  onCancel,
  placeholder = '답글을 작성하세요'
}: ReplyFormProps) {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    onSubmit(content);
    setContent('');
  };

  const handleCancel = () => {
    setContent('');
    onCancel();
  };

  return (
    <div className={styles.replyFormWrapper}>
      <textarea
        className={styles.replyInput}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={placeholder}
      />
      <div className={styles.replyFooter}>
        <button
          className={styles.actionButton}
          onClick={handleCancel}
        >
          취소
        </button>
        <button
          className={styles.actionButton}
          onClick={handleSubmit}
          disabled={!content}
          style={{ 
            backgroundColor: content ? vars.color.Mint : vars.color.grey300,
            padding: '0.6rem 1.2rem',
            borderRadius: '6px',
          }}
        >
          등록
        </button>
      </div>
    </div>
  );
}
