import * as styles from "./Header.css";
import { useNavigate } from "react-router-dom";
import { Ic_chevron_left, Ic_bars } from "@svg/index";

interface HeaderProps {
  showLogo?: boolean;
  showBackButton?: boolean;
  onBackClick?: () => void;
  showMenuButton?: boolean;
  onMenuClick?: () => void;
}

const Header = ({
  showLogo = true,
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
          <Ic_chevron_left />
        </button>
      )}
      {showLogo && <h1 className={styles.title}>feat/connect</h1>}

      {showMenuButton && (
        <button
          className={styles.menuButton}
          onClick={onMenuClick}
          aria-label="메뉴"
        >
          <Ic_bars />
        </button>
      )}
    </header>
  );
};

export default Header;
