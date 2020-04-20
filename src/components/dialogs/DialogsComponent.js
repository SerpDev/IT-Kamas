import React from "react";
import "./dialogs.css";
import {
  addMessActionCreator,
  updateNewMessActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsComponent = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addMessage = () => {
          store.dispatch(addMessActionCreator());
        };

        let onMessChange = (body) => {
          store.dispatch(updateNewMessActionCreator(body));
        };
        return (
          <Dialogs
            state={state}
            addMessage={addMessage}
            onMessChange={onMessChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default DialogsComponent;
