import React from "react";
import "./dialogs.css";
import {
  addMessActionCreator,
  updateNewMessActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsComponent = (props) => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessActionCreator());
  };

  let onMessChange = (body) => {
    props.store.dispatch(updateNewMessActionCreator(body));
  };

  return (
    <Dialogs
      state={state}
      addMessage={addMessage}
      onMessChange={onMessChange}
    />
  );
};
export default DialogsComponent;
