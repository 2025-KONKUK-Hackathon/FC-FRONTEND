import * as styles from './Header.css';

interface HeaderProps {
  onBackClick?: () => void;
}

export const Header = ({ onBackClick }: HeaderProps) => {
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      window.history.back();
    }
  };

  return (
    <header className={styles.container}>
      <button 
        className={styles.backButton}
        onClick={handleBackClick}
        aria-label="뒤로가기"
      >
        ←
      </button>
      <h1 className={styles.title}>feat/connect</h1>
    </header>
  );
};