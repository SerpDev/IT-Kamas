import React from "react";
import "./profile.css";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="bgImg"></div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
