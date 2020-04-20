import "./dialogs.css";
import {
  addMessActionCreator,
  updateNewMessActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessActionCreator());
    },
    onMessChange: (body) => {
      dispatch(updateNewMessActionCreator(body));
    },
  };
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
