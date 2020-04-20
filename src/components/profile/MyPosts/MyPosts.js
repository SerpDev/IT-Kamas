import React from "react";
import "./myPosts.css";
import Post from "./post/Post";

const MyPosts = (props) => {

  let state = props.state;
  let postsElem = state.postsData.map((item) => {
    return (
      <Post key={item.id} message={item.message} likeCount={item.likeCount} />
    );
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
  };

  return (
    <div className="myPost">
      <div className="postsBlock">
        <h3>My Posts</h3>
        <textarea
          className="textAreaPost"
          ref={newPostElement}
          onChange={onPostChange}
          value={state.newPostText}
        ></textarea>
        <div></div>
        <input type="submit" onClick={addPost} value="Отправить"></input>

        <div className="posts">{postsElem}</div>
      </div>
    </div>
  );
};
export default MyPosts;
