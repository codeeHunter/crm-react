import React, { FC } from "react";
import { Logo } from "../svgs/Logo";
import { Person } from "../svgs/Person";
import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
          <h3>Wrench CRM</h3>
        </div>
        <div className={styles.profile}>
          <Person />
          <h3>Имя Фамилия</h3>
        </div>
      </div>
    </div>
  );
};
