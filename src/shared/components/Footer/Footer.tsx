import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import * as styles from "./Footer.css";
import { ROUTES } from "@router/constant/Routes";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link to={ROUTES.POSTS.LIST} className={styles.navItem}>
        <FontAwesomeIcon icon={faClipboard} />
        <span className={styles.navText}>게시판</span>
      </Link>
      <Link to={ROUTES.GATHERING.LIST} className={styles.navItem}>
        <FontAwesomeIcon icon={faUsers} />
        <span className={styles.navText}>모임</span>
      </Link>
    </div>
  );
};

export default Footer;
