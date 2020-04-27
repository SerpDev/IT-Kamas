import React, { Component } from "react";
import Header from "./Header";
import Axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from '../../redux/auth-reduser';

class HeaderContainer extends Component {
  componentDidMount() {
    Axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
      withCredentials : true,
    })
    .then(
      (response) => {
       if(response.data.resultCode === 0){
         let {id, email, login} = response.data.data;
         this.props.setAuthUserData(id, email, login);
       }
      }
    );
  }

  render() {
    return <Header {...this.props}/>;
  }
}

let mapStateToProps = (state) => {
  return { state: state.authReducer };
};

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
