import { NavLink } from "react-router-dom";
import css from "../../App.module.css";
import clsx from "clsx";

const getNavLinkClassName = ({ isActive }) => {
  return clsx(css.navLink, {
    [css.active]: isActive,
  });
};

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">
            Home
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/register">
            Register
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/login">
            Login
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/contacts">
            Contacts
          </NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;