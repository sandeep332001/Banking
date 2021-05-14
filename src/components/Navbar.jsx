import { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import classes from "./navbar.module.scss";

const Navbar = () => {
  return (
    <Fragment>
      <nav className={classes.nav}>
        <span>
          <img src={logo} alt="banking logo" />
        </span>

        <ul>
          <li>
            <Link to="/home" className={classes.nav_links}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/customerList" className={classes.nav_links}>
              Customer List
            </Link>
          </li>
          <li>
            <Link to="/contactUs" className={classes.nav_links}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/about" className={classes.nav_links}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
