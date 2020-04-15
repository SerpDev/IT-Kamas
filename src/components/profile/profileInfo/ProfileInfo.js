import React from "react";
import "./profileInfo.css";
import ava from '../../../images/ava.png'

const ProfileInfo = (props) => {
  return (
    <div className="profileInfo">
      <div className="userInfo">
        <div className="contBlock">
          <div className="ava">
            <img src={ava} alt=""></img>
          </div>
          <div>
            <div className="name">Arthur H.</div>
            <div>Date of Birth: 2.10.1987</div>
            <div>City: Vinnitsya</div>
            <div>Education: UKN`11</div>
            <div>Web Site: https://mySite.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
