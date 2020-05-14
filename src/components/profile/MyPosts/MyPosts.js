import React from "react";
import "./myPosts.css";
import Post from "./post/Post";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import {
  required,
  maxLenghtCreator,
} from "../../../utilss/validators";
import { TextArea } from "../../commonn/FormsControl";



const maxLength10 = maxLenghtCreator(10);

const PostsForm = (props) => {
  return (
    <div className="postsForm">
      <form onSubmit={props.handleSubmit}>
        <Field
          component={TextArea}
          placeholder={"Enter your post"}
          name={"postText"}
          validate={[required, maxLength10]}
        ></Field>
        <div></div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};
const PostsReduxForm = reduxForm({
  form: "posts",
})(PostsForm);

const MyPosts = (props) => {
  let state = props.state;
  let postsElem = state.postsData.map((item) => {
    return (
      <Post key={item.id} message={item.message} likeCount={item.likeCount} />
    );
  });

  let addPost = (value) => {
    props.addPost(value.postText);
  };

  return (
    <div className="myPost">
      <div className="postsBlock">
        <h3>My Posts</h3>
        <PostsReduxForm onSubmit={addPost} />
        <div className="posts">{postsElem}</div>
      </div>
    </div>
  );
};
export default MyPosts;
