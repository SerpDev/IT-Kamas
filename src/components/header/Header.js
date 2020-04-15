import React from "react";
import "./style.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header">
     <img src={logo} alt="Logo" />
    </div>
  );
};
export default Header;
