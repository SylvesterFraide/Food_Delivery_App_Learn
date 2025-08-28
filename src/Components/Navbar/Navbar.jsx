import React, { useState } from "react";
import "./Navbar.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import ShoppingBasketTwoToneIcon from "@mui/icons-material/ShoppingBasketTwoTone";

const Navbar = ({ mylogo, home, menu, mobileApp, contactUs, signIn }) => {
  const [activeMenu, setActiveMenu] = useState("home");
  return (
    <div className="navbar">
      <h3 className="logo">{mylogo}</h3>
      <ul className="navbar-menu">
        <li
          className={activeMenu === "home" ? "active" : ""}
          onClick={() => setActiveMenu("home")}
        >
          {home}
        </li>
        <li
          className={activeMenu === "menu" ? "active" : ""}
          onClick={() => setActiveMenu("menu")}
        >
          {menu}
        </li>
        <li
          className={activeMenu === "mobileApp" ? "active" : ""}
          onClick={() => setActiveMenu("mobileApp")}
        >
          {mobileApp}
        </li>
        <li
          className={activeMenu === "contactUs" ? "active" : ""}
          onClick={() => setActiveMenu("contactUs")}
        >
          {contactUs}
        </li>
      </ul>
      <div className="navbar-right">
        <SearchTwoToneIcon />
        <div className="navbar-search-icon">
          <ShoppingBasketTwoToneIcon />
          <div className="dot"></div>
        </div>
        <button>{signIn}</button>
      </div>
    </div>
  );
};

export default Navbar;
