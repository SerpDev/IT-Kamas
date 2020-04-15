import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import state, { subscribe } from "./redux/state";
import App from "./App";
import {
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMess,
} from "./redux/state";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireThree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
      
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMess={updateNewMess}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireThree(state);
subscribe(rerenderEntireThree);
