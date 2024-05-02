// import { NavLink } from "react-router-dom";
// import css from "../../App.module.css";
// import clsx from "clsx";
import css from "./Layout.module.css";

import AppBar from "../AppBar/AppBar";

// const getNavLinkClassName = ({ isActive }) => {
//   return clsx(css.navLink, {
//     [css.active]: isActive,
//   });
// };

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      <main className={css.mainContainer}>{children}</main>
    </div>
  );
};

export default Layout;
