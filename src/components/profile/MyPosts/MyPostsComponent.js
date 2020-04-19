import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsComponent = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (body) => {
    props.store.dispatch(updateNewPostActionCreator(body));
  };

  return (
    <MyPosts state={state} addPost={addPost} onPostChange={onPostChange} />
  );
};
export default MyPostsComponent;
