import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./tab-link.module.css";

export const TabLink = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.link, isActive && styles.activeLink)
      }
    >
      {title}
    </NavLink>
  );
};
