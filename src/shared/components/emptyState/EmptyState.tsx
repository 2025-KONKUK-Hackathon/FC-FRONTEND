import * as styles from './EmptyState.css';

interface EmptyStateProps {
  type: 'posts' | 'gatherings';
  message?: string;
  subMessage?: string;
}

export default function EmptyState({ 
  type, 
  message, 
  subMessage 
}: EmptyStateProps) {
  const defaultMessage = type === 'posts' 
    ? '필터링 결과가 없습니다' 
    : '해당 조건의 모임이 없습니다';
    
  const defaultSubMessage = type === 'posts'
    ? '다른 필터 조건을 선택해보세요'
    : '새로운 모임을 만들어보는 건 어떨까요?';

  const emoji = type === 'posts' ? '📝' : '👥';

  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{emoji}</span>
      </div>
      <h3 className={styles.message}>
        {message || defaultMessage}
      </h3>
      <p className={styles.subMessage}>
        {subMessage || defaultSubMessage}
      </p>
    </div>
  );
}