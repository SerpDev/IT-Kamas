import React from "react";
import "./myPosts.css";
import Post from "./post/Post";

const MyPosts = (props) => {
  let postsElem = props.profilePage.postsData.map((item) => {
    return <Post message={item.message} likeCount={item.likeCount} />;
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type:'ADD-POST'});
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text});
  };

  return (
    <div className="myPost">
      <div className="postsBlock">
        <h3>My Posts</h3>
        <textarea
          className="textAreaPost"
          ref={newPostElement}
          onChange={onPostChange}
          value={props.profilePage.newPostText}
        ></textarea>
        <div></div>
        <input type="submit" onClick={addPost} value="Отправить"></input>

        <div className="posts">{postsElem}</div>
      </div>
    </div>
  );
};
export default MyPosts;
