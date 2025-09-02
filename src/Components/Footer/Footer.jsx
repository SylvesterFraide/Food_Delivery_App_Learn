import React from "react";
import "./Footer.css";
import logo from "../../assets/log1.avif";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={logo} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            dicta delectus totam minima deserunt sapiente corrupti ipsa,
            mollitia blanditiis quas, tempora impedit consectetur quos. Magni
            ratione quibusdam ullam impedit esse.
          </p>
          <div className="footer-social-icon">
            <FacebookTwoToneIcon />
            <XIcon />
            <InstagramIcon />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get IN TOUCH</h2>
          <ul>
            <li>+254 700 000 000</li>
            <li>info@example.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">&copy; 2023 Your Company. All rights reserved.</p>
    </div>
  );
};

export default Footer;
