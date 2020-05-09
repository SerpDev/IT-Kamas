import React, { Component } from "react";
import { connect } from "react-redux";
import {
  unFollow,
  follow,
  setCurrentPage,
  toogleIsFollowingProgress,
  getUsers,
} from "../../redux/users-reduser";
import Users from "./Users";
import Loader from "../loader/loader";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(
      this.props.state.currentPage,
      this.props.state.pageSize
    );
  }
  onPageCanged = (pageNum) => {
    this.props.getUsers(pageNum, this.props.state.pageSize);
  };

  render() {
    return (
      <>
        {!this.props.state.isFetching ? (
          <Loader />
        ) : (
          <Users
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            onPageCanged={this.onPageCanged}
            totalUsersCount={this.props.state.totalUsersCount}
            pageSize={this.props.state.pageSize}
            users={this.props.state.users}
            currentPage={this.props.state.currentPage}
            followingInProgres={this.props.state.followingInProgres}
          />
        )}
      </>
    );
  }
}

let mapStatetoProps = (state) => {
  return {
    state: state.usersReducer,
    isAuth: state.authReducer.isAuth,
  };
};


export default compose(
  connect(mapStatetoProps, {
    follow,
    unFollow,
    setCurrentPage,
    toogleIsFollowingProgress,
    getUsers,
  }),
  withAuthRedirect
)(UsersContainer);
