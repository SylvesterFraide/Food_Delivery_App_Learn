import React, { useState } from "react";
import "./Navbar.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import ShoppingBasketTwoToneIcon from "@mui/icons-material/ShoppingBasketTwoTone";
import logo from '../../assets/log1.avif';
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin, home, menu, mobileApp, contactUs, signIn }) => {
  const [activeMenu, setActiveMenu] = useState("home");
  return (
    <div className="navbar">
      {/* <h3 className="logo">{mylogo}</h3> */}
      <img src={logo} alt="Logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          className={activeMenu === "home" ? "active" : ""}
          onClick={() => setActiveMenu("home")}
        >
          {home}
        </Link>
        <a
          href="#explore-menu"
          className={activeMenu === "menu" ? "active" : ""}
          onClick={() => setActiveMenu("menu")}
        >
          {menu}
        </a>
        <a
          href="#app-download"
          className={activeMenu === "mobileApp" ? "active" : ""}
          onClick={() => setActiveMenu("mobileApp")}
        >
          {mobileApp}
        </a>
        <a
          href="#footer"
          className={activeMenu === "contactUs" ? "active" : ""}
          onClick={() => setActiveMenu("contactUs")}
        >
          {contactUs}
        </a>
      </ul>
      <div className="navbar-right">
        <SearchTwoToneIcon />
        <div className="navbar-search-icon">
          <ShoppingBasketTwoToneIcon />
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>{signIn}</button>
      </div>
    </div>
  );
};

export default Navbar;
