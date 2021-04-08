import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLink
        exact
        to="/"
        className={styles.all}
        activeClassName={styles.activeLink}
      >
        <p className={styles.all__text}>Все</p>
      </NavLink>

      <NavLink
        to="/blocked"
        className={styles.blocked}
        activeClassName={styles.activeLink}
      >
        <p className={styles.blocked__text}>Заблокированные</p>
      </NavLink>

      <NavLink
        to="/active"
        className={styles.active}
        activeClassName={styles.activeLink}
      >
        <p className={styles.active__text}>Активные</p>
      </NavLink>
    </div>
  );
}

export default Navbar;
