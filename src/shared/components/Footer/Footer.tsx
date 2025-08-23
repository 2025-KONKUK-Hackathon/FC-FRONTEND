import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faUsers } from "@fortawesome/free-solid-svg-icons";
import { container, navItem, navText } from "./Footer.css";

const Footer = () => {
  return (
    <div className={container}>
      <button type="button" className={navItem}>
        <FontAwesomeIcon icon={faClipboard} />
        <span className={navText}>게시판</span>
      </button>
      <button type="button" className={navItem}>
        <FontAwesomeIcon icon={faUsers} />
        <span className={navText}>모임</span>
      </button>
    </div>
  );
};

export default Footer;
