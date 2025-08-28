import * as styles from './EmptyState.css';

interface EmptyStateProps {
  type: 'posts' | 'gatherings' | 'scrapped-posts' | 'my-gatherings';
  message?: string;
  subMessage?: string;
}

export default function EmptyState({ 
  type, 
  message, 
  subMessage 
}: EmptyStateProps) {
  const getDefaultMessage = () => {
    switch (type) {
      case 'posts':
        return '필터링 결과가 없습니다';
      case 'gatherings':
        return '해당 조건의 모임이 없습니다';
      case 'scrapped-posts':
        return '스크랩한 게시물이 없습니다';
      case 'my-gatherings':
        return '생성한 모임이 없습니다';
      default:
        return '결과가 없습니다';
    }
  };
    
  const getDefaultSubMessage = () => {
    switch (type) {
      case 'posts':
        return '다른 필터 조건을 선택해보세요';
      case 'gatherings':
        return '새로운 모임을 만들어보는 건 어떨까요?';
      case 'scrapped-posts':
        return '마음에 드는 게시물을 스크랩해보세요';
      case 'my-gatherings':
        return '첫 번째 모임을 만들어보세요';
      default:
        return '';
    }
  };

  const getEmoji = () => {
    switch (type) {
      case 'posts':
        return '📝';
      case 'gatherings':
        return '👥';
      case 'scrapped-posts':
        return '🔖';
      case 'my-gatherings':
        return '✨';
      default:
        return '💭';
    }
  };

  const emoji = getEmoji();

  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{emoji}</span>
      </div>
      <h3 className={styles.message}>
        {message || getDefaultMessage()}
      </h3>
      <p className={styles.subMessage}>
        {subMessage || getDefaultSubMessage()}
      </p>
    </div>
  );
}