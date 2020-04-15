import React from "react";
import "./dialogs.css";
import DialogItem from "./dialogsItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {
  let dialogsElement = props.dialogsPage.dialogsData.map((item) => {
    return <DialogItem name={item.name} id={item.id}></DialogItem>;
  });

  let messElement = props.dialogsPage.messagesData.map((item) => {
    return <Message message={item.message} />;
  });

  let newMessElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessChange = () => {
    let text = newMessElement.current.value;
    props.updateNewMess(text);
  };

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
          value={props.dialogsPage.newMessagesText}
        ></textarea>
        <div></div>
        <input type="submit" onClick={addMessage} value="Отправить"></input>
      </div>
    </div>
  );
};
export default Dialogs;
