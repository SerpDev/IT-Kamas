import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUsersProfile } from "./../../redux/profile-reducer";
import { withRouter, Redirect } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUsersProfile(userId);
    
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
    isAuth: state.authReducer.isAuth,
  };
};
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUsersProfile })(
  WithUrlDataContainerComponent
);
