import React, { useContext, useState } from "react";
import "./Navbar.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import ShoppingBasketTwoToneIcon from "@mui/icons-material/ShoppingBasketTwoTone";
import logo from "../../assets/log1.avif";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin, home, menu, mobileApp, contactUs, signIn }) => {

  const [activeMenu, setActiveMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      {/* <h3 className="logo">{mylogo}</h3> */}
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
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
          <Link to="/cart">
            {" "}
            <ShoppingBasketTwoToneIcon />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>{signIn}</button>
      </div>
    </div>
  );
};

export default Navbar;
