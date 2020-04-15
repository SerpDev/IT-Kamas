import React from "react";
import "./post.css";
import iconAva from "../../../../images/iconaVA.png";

const Post = (props) => {
  return (
    <div className="post">
      <img src={iconAva} alt=""></img>
      <div>{props.message}</div>
      <div>{props.likeCount}</div>
    </div>
  );
};
export default Post;
