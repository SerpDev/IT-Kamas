import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUsersProfile } from "./../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUsersProfile(userId);
  }

  render() {
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

export default compose(
  connect(mapStateToProps, { getUsersProfile }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
