import { container, title, backButton } from './Header.css';

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
    <header className={container}>
      <button 
        className={backButton}
        onClick={handleBackClick}
        aria-label="뒤로가기"
      >
        ←
      </button>
      <h1 className={title}>feat/connect</h1>
    </header>
  );
};