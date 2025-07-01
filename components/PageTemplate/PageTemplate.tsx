import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./styles.module.css";
import React from "react";

type PageTemplateProps = {
  children: React.ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.contentWrapper}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageTemplate;
