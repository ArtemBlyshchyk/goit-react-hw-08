// import { NavLink } from "react-router-dom";
// import css from "../../App.module.css";
// import clsx from "clsx";

import AppBar from "../AppBar/AppBar";

// const getNavLinkClassName = ({ isActive }) => {
//   return clsx(css.navLink, {
//     [css.active]: isActive,
//   });
// };

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
