import "./dialogs.css";
import {
  addMessActionCreator,
  updateNewMessActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    state: state.dialogsReducer,
    isAuth: state.authReducer.isAuth,
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


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
