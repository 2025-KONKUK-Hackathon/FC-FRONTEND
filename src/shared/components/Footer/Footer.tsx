import { Link, useLocation } from 'react-router-dom';
import * as styles from '@shared/components/Footer/Footer.css';
import { ROUTES } from '@router/constant/Routes';
import { Ic_signs_post, Ic_users_solid, Ic_user_solid, Ic_link } from '@svg/index';

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
        <Ic_signs_post className={styles.icon({ isActive: location.pathname === ROUTES.HOME })} />
        <span
          className={styles.navText({
            isActive: location.pathname === ROUTES.HOME,
          })}
        >
          게시판
        </span>
      </Link>
      <Link
        to={ROUTES.GATHERING.LIST}
        className={styles.navItem({
          isActive: location.pathname === ROUTES.GATHERING.LIST,
        })}
      >
        <Ic_users_solid
          className={styles.icon({ isActive: location.pathname === ROUTES.GATHERING.LIST })}
        />
        <span
          className={styles.navText({
            isActive: location.pathname === ROUTES.GATHERING.LIST,
          })}
        >
          모임
        </span>
      </Link>
      <Link
        to={ROUTES.USER.DETAIL}
        className={styles.navItem({
          isActive: location.pathname === ROUTES.USER.DETAIL,
        })}
      >
        <Ic_user_solid
          className={styles.icon({ isActive: location.pathname === ROUTES.USER.DETAIL })}
        />
        <span
          className={styles.navText({
            isActive: location.pathname === ROUTES.USER.DETAIL,
          })}
        >
          마이페이지
        </span>
      </Link>
      <Link
        to={ROUTES.INFO}
        className={styles.navItem({
          isActive: location.pathname === ROUTES.INFO,
        })}
      >
        <Ic_link className={styles.icon({ isActive: location.pathname === ROUTES.INFO })} />
        <span
          className={styles.navText({
            isActive: location.pathname === ROUTES.INFO,
          })}
        >
          링크
        </span>
      </Link>
    </div>
  );
};

export default Footer;
