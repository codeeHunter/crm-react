import React, { FC, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Calendar } from "../svgs/Calendar";
import { Exit } from "../svgs/Exit";
import { HomeIcon } from "../svgs/HomeIcon";
import { Management } from "../svgs/Management";
import { Map } from "../svgs/Map";
import { Search } from "../svgs/Search";
import { Settings } from "../svgs/Settings";
import { SettingsProfile } from "../svgs/SettingsProfile";
import { Table } from "../svgs/Table";
import { UpArrow } from "../svgs/UpArrow";
import { Vidgets } from "../svgs/Vidgets";
import styles from "./Sidebar.module.scss";

export const Sidebar: FC = () => {
  const [openSetting, setOpenSetting] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const openSettings = () => {
    setOpenSetting(!openSetting);
  };

  return (
    <div className={styles.sidebar}>
      <h2>Menu</h2>
      <div
        className={
          active === "/"
            ? [styles.block, styles.active].join(" ")
            : styles.block
        }
      >
        <NavLink to={"/"}>
          <HomeIcon />
          <span>Главная</span>
        </NavLink>
      </div>
      <div
        className={
          active === "/address"
            ? [styles.block, styles.active].join(" ")
            : styles.block
        }
      >
        <NavLink to={"/address"}>
          <Search />
          <span>Поиск адресов</span>
        </NavLink>
      </div>
      <div
        className={
          active ? styles.block : [styles.block, styles.active].join(" ")
        }
      >
        <Table />
        <span>Таблицы</span>
      </div>
      <div
        className={
          active ? styles.block : [styles.block, styles.active].join(" ")
        }
      >
        <Calendar />
        <span>Календарь</span>
      </div>
      <div
        className={
          active
            ? [styles.block, styles.map].join(" ")
            : [styles.block, styles.active].join(" ")
        }
      >
        <Map />
        <span>Карты</span>
      </div>
      <div
        className={
          active ? styles.block : [styles.block, styles.active].join(" ")
        }
      >
        <Vidgets />
        <span>Виджеты</span>
      </div>

      <div className={styles.block} onClick={openSettings}>
        <Settings />
        <span>Настройки</span>
        {openSetting && (
          <span className={styles.upArrow}>
            <UpArrow />
          </span>
        )}
      </div>
      {openSetting && (
        <>
          <div className={[styles.block, styles.settings].join(" ")}>
            <div className={styles.subSettings}>
              <SettingsProfile />
              <span>Настройки профиля</span>
            </div>
          </div>
          <div className={[styles.block, styles.settings].join(" ")}>
            <div className={styles.subSettings}>
              <Management />
              <span>Управление финансами</span>
            </div>
          </div>
        </>
      )}
      <div
        className={
          active ? styles.block : [styles.block, styles.active].join(" ")
        }
      >
        <Exit />
        <span>Выход</span>
      </div>
    </div>
  );
};
