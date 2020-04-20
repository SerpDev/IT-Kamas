import React from "react";
import "./profile.css";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsComponent from './MyPosts/MyPostsComponent';

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="bgImg"></div>
      <ProfileInfo />
      <MyPostsComponent />
    </div>
  );
};
export default Profile;
