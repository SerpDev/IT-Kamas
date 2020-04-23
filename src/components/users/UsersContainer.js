import Users from "./Users";
import { connect } from "react-redux";
import { followAC, unFollowAC, setUsersAC } from '../../redux/users-reduser';

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
     }
  };
};

let UsersContainer = connect(mapStatetoProps, mapDispatchToProps)(Users);

export default UsersContainer;
