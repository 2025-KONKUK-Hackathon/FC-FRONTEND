import { useEffect } from "react";
import * as styles from "./NotFound.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 300000);
  }, []);
  return (
    <div className={styles.notFound}>
      <div className={styles.umbrellaContainer}>
        <p className={styles.notFoundEmoji}>☂️</p>
        <div className={styles.rainContainer}>
          <span className={styles.raindrop}>💧</span>
          <span className={styles.raindrop}>💧</span>
          <span className={styles.raindrop}>💧</span>
          <span className={styles.raindrop}>💧</span>
          <span className={styles.raindrop}>💧</span>
          <span className={styles.raindrop}>💧</span>
          <span className={styles.raindrop}>💧</span>
          <span className={styles.raindrop}>💧</span>
        </div>
      </div>
      <p className={styles.notFound404}>404</p>
      <p className={styles.notFoundText}>
        요청하신 페이지가 존재하지 않습니다.
        <br />
        3초 뒤 홈으로 돌아갑니다.
      </p>
    </div>
  );
}
