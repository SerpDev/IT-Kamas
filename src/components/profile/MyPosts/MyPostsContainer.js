import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (body) => {
      dispatch(updateNewPostActionCreator(body));
    },
  };
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
