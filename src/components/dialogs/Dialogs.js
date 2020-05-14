import React from "react";
import DialogItem from "./dialogsItem/DialogItem";
import Message from "./message/Message";
import { reduxForm, Field } from "redux-form";
import { required, maxLenghtCreator } from './../../utilss/validators';
import { TextArea } from "../commonn/FormsControl";

const maxLength50 = maxLenghtCreator(25);

const DialogsForm = (props) => {
  return (
    <div className="dialogsForm">
      <form onSubmit={props.handleSubmit}>
        <Field
          name={"messText"}
          component={TextArea}
          placeholder={"Enter your message"}
          validate={[required, maxLength50]}
        ></Field>
        <div></div>
        <button
          type="submit"
        >Отправить</button>
      </form>
    </div>
  );
};
const DialogsReduxForm = reduxForm({
  form: "dialog",
})(DialogsForm);

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

  let addNewMessage = (values) => {
    props.addMessage(values.messText);
    
  }

  return (
    <div>
      <div className="dialogs">
        <div className="dialogs-items">{dialogsElement}</div>
        <div className="messages">{messElement}</div>
      </div>
      <div className="messBlock">
        <DialogsReduxForm onSubmit={addNewMessage}
          // addMessage={addMessage}
          // onMessChange={onMessChange}
          // newMessElement={newMessElement}
        />
      </div>
    </div>
  );
};
export default Dialogs;
