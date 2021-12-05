import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css"

const links = [
  {
    to: "/",
    title: "Home",
    exact: true,
  },
  {
    to: "/contact",
    title: "Contact",
    exact: true,
  },
  {
    to: "/about",
    title: "About Us",
    exact: true,
  },
  {
    to: "/services",
    title: "Services",
    exact: true,
  },
  {
    to: "/login",
    title: "Login",
    exact: true,
  },
];

function NavBar() {
  return (
    <div className={styles.navBar}>
      {links.map((item) => (
        <Link to={item.to} key={item.to}>
          {item.title}
        </Link>
      ))}
      
    </div>
  );
}

export default NavBar;
