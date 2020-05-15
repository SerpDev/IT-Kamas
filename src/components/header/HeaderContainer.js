import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData, logOut } from '../../redux/auth-reduser';

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props}/>;
  }
}

let mapStateToProps = (state) => {
  return { state: state.authReducer };
};

export default connect(mapStateToProps, {getAuthUserData, logOut})(HeaderContainer);
