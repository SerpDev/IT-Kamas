import React from "react";
import "./profileInfo.css";
import Loader from "../../loader/loader";
import defFoto from "../../../images/defFoto.jpg";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }
  return (
    <div className="profileInfo">
      <div className="userInfo">
        <div className="contBlock">
          <div className="ava">
            {props.profile.photos.large == null ? (
              <img src={defFoto} alt=""></img>
            ) : (
              <img src={props.profile.photos.large} alt=""></img>
            )}
          </div>
          <div>
            <div className="name">Name: {props.profile.fullName}</div>
            <div className='status'>
              <ProfileStatus
                status={props.status}
                updateStatus={props.updateStatus}
              />
            </div>

            <div>{props.profile.aboutMe}</div>
            <div>Twitter: {props.profile.contacts.twitter}</div>
            <div>github: {props.profile.contacts.github}</div>
            <div>
              What you find job: {props.profile.lookingForAJobDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
