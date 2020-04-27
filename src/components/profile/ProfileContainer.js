import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUsersProfile } from "./../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { getProfileUser } from "../../api/api";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    getProfileUser(userId).then((data) => {
      this.props.setUsersProfile(data);
    });
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
  };
};
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUsersProfile })(
  WithUrlDataContainerComponent
);
