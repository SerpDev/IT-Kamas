import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsComponent = (props) => {

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (body) => {
          store.dispatch(updateNewPostActionCreator(body));
        };

        return (
          <MyPosts
            state={state}
            addPost={addPost}
            onPostChange={onPostChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default MyPostsComponent;
