import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state.profileReducer,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postText) => {
      dispatch(addPostActionCreator(postText));
    },
  };
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
