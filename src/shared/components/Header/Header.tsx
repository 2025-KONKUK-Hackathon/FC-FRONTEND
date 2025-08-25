import * as styles from "./Header.css";
import { useNavigate } from "react-router-dom";
import { Ic_chevron_left, Ic_bars } from "@svg/index";

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
          <img src={Ic_chevron_left} alt="뒤로가기 아이콘" width={22} />
        </button>
      )}
      <h1 className={styles.title}>feat/connect</h1>
      {showMenuButton && (
        <button
          className={styles.menuButton}
          onClick={onMenuClick}
          aria-label="메뉴"
        >
          <img src={Ic_bars} alt="메뉴 아이콘" width={22} />
        </button>
      )}
    </header>
  );
};

export default Header;
