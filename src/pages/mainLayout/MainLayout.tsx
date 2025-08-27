import Footer from "@shared/components/Footer/Footer";
import Header from "@shared/components/Header/Header";
import { Outlet } from "react-router-dom";
import * as styles from "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
