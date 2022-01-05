import React from "react";

import styles from "./Header.module.css";

import headerBackgroundImg from "../../assets/Monterey.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={headerBackgroundImg} alt="A MacBook Background" />
      </div>
    </React.Fragment>
  );
};

export default Header;
