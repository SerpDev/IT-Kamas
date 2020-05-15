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
          <div>
            <div> Hello, {props.state.login} </div>
            <button onClick={props.logOut}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}><button>Login</button></NavLink>
        )}
      </div>
    </div>
  );
};
export default Header;
