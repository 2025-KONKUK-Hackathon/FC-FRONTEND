import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faUsers } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./Footer.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.navItem}>
        <FontAwesomeIcon icon={faClipboard} />
        <span className={styles.navText}>게시판</span>
      </button>
      <button type="button" className={styles.navItem}>
        <FontAwesomeIcon icon={faUsers} />
        <span className={styles.navText}>모임</span>
      </button>
    </div>
  );
};

export default Footer;
