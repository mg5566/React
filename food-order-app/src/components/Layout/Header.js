import React from "react";

import styles from "./Header.module.css";

import headerBackgroundImg from "../../assets/header_background.png";

const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={headerBackgroundImg} alt="MacBook Background" />
      </div>
    </React.Fragment>
  );
};

export default Header;
