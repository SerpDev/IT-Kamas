import React from "react";
import "./profile.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="bgImg"></div>
      <ProfileInfo />
      <MyPosts store={props.store} />
    </div>
  );
};
export default Profile;
