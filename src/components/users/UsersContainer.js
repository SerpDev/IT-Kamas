import React, { Component } from "react";
import { connect } from "react-redux";
import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/users-reduser';
import Axios from "axios";
import Users from './Users';

class UsersContainer extends Component {
  componentDidMount() {
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`
    ).then((response) => {
      this.props.setUsers(response.data.items);
      this.props.setUsersTotalCount(response.data.totalCount);
    });
  }
  onPageCanged = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.state.pageSize}`
    ).then((response) => {
      this.props.setUsers(response.data.items);
    });
  };

  render() {
    return (
      <Users
        onPageCanged={this.onPageCanged}
        totalUsersCount={this.props.state.totalUsersCount}
        pageSize={this.props.state.pageSize}
        users={this.props.state.users}
        unFollow={this.props.unFollow}
        follow={this.props.follow}
        currentPage={this.props.state.currentPage}
      />
    );
  }
}


let mapStatetoProps = (state) => {
  return {
    state: state.usersReducer,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
     follow : (userId) => {
      dispatch(followAC(userId));
     },
     unFollow : (userId) => {
      dispatch(unFollowAC(userId));
     },
     setUsers : (users)=>{
      dispatch(setUsersAC(users))
     },
     setCurrentPage: (pageNum)=>{
      dispatch(setCurrentPageAC(pageNum));
     },
     setUsersTotalCount: (totalCountUsers)=>{
      dispatch(setUsersTotalCountAC(totalCountUsers));
     },
  };   
};

export default connect(mapStatetoProps, mapDispatchToProps)(UsersContainer);


