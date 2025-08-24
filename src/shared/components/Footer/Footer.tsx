import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignsPost, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import * as styles from "./Footer.css";
import { ROUTES } from "@router/constant/Routes";

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
        <FontAwesomeIcon icon={faSignsPost} />
        <span className={styles.navText({ isActive: location.pathname === ROUTES.HOME })}>게시판</span>
      </Link>
      <Link
        to={ROUTES.GATHERING.LIST}
        className={styles.navItem({
          isActive: location.pathname === ROUTES.GATHERING.LIST,
        })}
      >
        <FontAwesomeIcon icon={faUsers} />
        <span className={styles.navText({ isActive: location.pathname === ROUTES.GATHERING.LIST })}>모임</span>
      </Link>
    </div>
  );
};

export default Footer;
