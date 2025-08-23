import * as styles from "./Header.css";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onBackClick?: () => void;
}

const Header = ({ onBackClick }: HeaderProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
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

export default Header;
