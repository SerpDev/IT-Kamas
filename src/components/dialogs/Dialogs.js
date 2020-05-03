import React from "react";
import DialogItem from "./dialogsItem/DialogItem";
import Message from "./message/Message";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.state;

  let dialogsElement = state.dialogsData.map((item) => {
    return (
      <DialogItem key={item.id} name={item.name} id={item.id}></DialogItem>
    );
  });

  let messElement = state.messagesData.map((item) => {
    return <Message key={item.id} message={item.message} />;
  });

  let newMessElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessChange = () => {
    let text = newMessElement.current.value;
    props.onMessChange(text);
  };
  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <div className="dialogs">
        <div className="dialogs-items">{dialogsElement}</div>
        <div className="messages">{messElement}</div>
      </div>
      <div className="messBlock">
        <textarea
          className="textAreaMess"
          ref={newMessElement}
          onChange={onMessChange}
          value={state.newMessagesText}
        ></textarea>
        <div></div>
        <input type="submit" onClick={addMessage} value="Отправить"></input>
      </div>
    </div>
  );
};
export default Dialogs;
