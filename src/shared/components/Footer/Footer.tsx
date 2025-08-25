import { Link, useLocation } from "react-router-dom";
import * as styles from "./Footer.css";
import { ROUTES } from "@router/constant/Routes";
import { Ic_signs_post, Ic_users_solid, Ic_user_solid } from "@svg/index";

const Footer = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <Link
        to={ROUTES.HOME}
        className={styles.navItem({
          isActive: location.pathname === ROUTES.HOME,
        })}
      >
        <img src={Ic_signs_post} alt="게시판 아이콘" width={24} />
        <span className={styles.navText({ isActive: location.pathname === ROUTES.HOME })}>게시판</span>
      </Link>
      <Link
        to={ROUTES.GATHERING.LIST}
        className={styles.navItem({
          isActive: location.pathname === ROUTES.GATHERING.LIST,
        })}
      >
        <img src={Ic_users_solid} alt="모임 아이콘" width={24} />
        <span className={styles.navText({ isActive: location.pathname === ROUTES.GATHERING.LIST })}>모임</span>
      </Link>
      <Link
        to={ROUTES.MY_PAGE}
        className={styles.navItem({
          isActive: location.pathname === ROUTES.MY_PAGE,
        })}
      >
        <img src={Ic_user_solid} alt="마이페이지 아이콘" width={24} />
        <span className={styles.navText({ isActive: location.pathname === ROUTES.MY_PAGE })}>마이</span>
      </Link>
    </div>
  );
};

export default Footer;
