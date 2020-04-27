import React, { Component } from "react";
import { connect } from "react-redux";
import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toogleLoader,
} from "../../redux/users-reduser";
import Users from "./Users";
import Loader from "../loader/loader";
import { getUsers } from "../../api/api";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.toogleLoader(true);
    getUsers(this.props.state.currentPage, this.props.state.pageSize).then(
      (data) => {
        this.props.toogleLoader(false);
        this.props.setUsers(data.items);
        this.props.setUsersTotalCount(data.totalCount);
      }
    );
  }
  onPageCanged = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    this.props.toogleLoader(true);
    getUsers(pageNum, this.props.state.pageSize).then((data) => {
      this.props.toogleLoader(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.state.isFetching ? (
          <Loader />
        ) : (
          <Users
            onPageCanged={this.onPageCanged}
            totalUsersCount={this.props.state.totalUsersCount}
            pageSize={this.props.state.pageSize}
            users={this.props.state.users}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            currentPage={this.props.state.currentPage}
          />
        )}
      </>
    );
  }
}

let mapStatetoProps = (state) => {
  return {
    state: state.usersReducer,
  };
};

export default connect(mapStatetoProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toogleLoader,
})(UsersContainer);
