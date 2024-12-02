import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./headphone-tab.module.css";

export const HeadphoneTab = ({ id, title }) => {
  return (
    <NavLink
      to={`headphone/${id}`}
      className={({ isActive }) =>
        classNames(styles.link, isActive && styles.activeLink)
      }
    >
      {title}
    </NavLink>
  );
};
