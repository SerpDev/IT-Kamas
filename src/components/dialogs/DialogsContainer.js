import "./dialogs.css";
import {
  addMessActionCreator,
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
    addMessage: (messText) => {
      dispatch(addMessActionCreator(messText));
    },
  };
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
