import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./Header.css";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  showBackButton?: boolean;
  onBackClick?: () => void;
  showMenuButton?: boolean;
  onMenuClick?: () => void;
}

const Header = ({
  onBackClick,
  showBackButton = false,
  showMenuButton = false,
  onMenuClick,
}: HeaderProps) => {
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
      {showBackButton && (
        <button
          className={styles.backButton}
          onClick={handleBackClick}
          aria-label="뒤로가기"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      <h1 className={styles.title}>feat/connect</h1>
      {showMenuButton && (
        <button
          className={styles.menuButton}
          onClick={onMenuClick}
          aria-label="메뉴"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
    </header>
  );
};

export default Header;
