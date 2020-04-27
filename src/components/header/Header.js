import React from "react";
import "./header.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <div className="loginBlock">
        {props.state.isAuth ? (
         `Hello, ${props.state.login}`
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </div>
  );
};
export default Header;
