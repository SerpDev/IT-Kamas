import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/state";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

let _callSubscriber = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateNewMess={store.updateNewMess.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

_callSubscriber(store.getState());
store.subscribe(_callSubscriber);
