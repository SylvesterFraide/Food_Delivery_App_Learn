import React from "react";
import "./Navbar.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import ShoppingBasketTwoToneIcon from "@mui/icons-material/ShoppingBasketTwoTone";

const Navbar = ({ mylogo, home, menu, mobileApp, contactUs, signIn }) => {
  return (
    <div className="navbar">
      <h3 className="logo">{mylogo}</h3>
      <ul className="navbar-menu">
        <li>{home}</li>
        <li>{menu}</li>
        <li>{mobileApp}</li>
        <li>{contactUs}</li>
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
