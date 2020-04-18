import React from "react";
import "./myPosts.css";
import Post from "./post/Post";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "./../../../redux/profile-reducer";

const MyPosts = (props) => {
  let postsElem = props.store.getState().profileReducer.postsData.map((item) => {
    return (
      <Post key={item.id} message={item.message} likeCount={item.likeCount} />
    );
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.store.dispatch(updateNewPostActionCreator(text));
  };

  return (
    <div className="myPost">
      <div className="postsBlock">
        <h3>My Posts</h3>
        <textarea
          className="textAreaPost"
          ref={newPostElement}
          onChange={onPostChange}
          value={props.store.getState().profileReducer.newPostText}
        ></textarea>
        <div></div>
        <input type="submit" onClick={addPost} value="Отправить"></input>

        <div className="posts">{postsElem}</div>
      </div>
    </div>
  );
};
export default MyPosts;
