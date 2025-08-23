import Footer from "@shared/components/Footer/Footer";
import Header from "@shared/components/Header/Header";
import { Outlet } from "react-router-dom";
import * as styles from './MainLayout.css'

const MainLayout = () => {
  return (
    <div className={styles.main}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
