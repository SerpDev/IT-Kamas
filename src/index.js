import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/redux-store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

let rerenderEntireThree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireThree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireThree(state);
});
