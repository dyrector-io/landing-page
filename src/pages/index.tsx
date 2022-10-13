import type { NextPage } from "next";
import styles from "../styles/index.module.css";
import DyoFooter from "../components/main/dyo-footer";
import DyoNavbar from "../components/main/dyo-navbar";
import SectionHeader from "../components/index/section-header";

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <DyoNavbar />
      <SectionHeader />
      <DyoFooter />
    </div>
  );
};

export default Index;
