const FOLLOW_AC = "FOLLOW_AC";
const UN_FOLLOW_AC = "UN_FOLLOW_AC";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_AC: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UN_FOLLOW_AC: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};
export let followAC = (userId) => {
  return {
    type: FOLLOW_AC,
    userId,
  };
};
export let unFollowAC = (userId) => {
  return {
    type: UN_FOLLOW_AC,
    userId,
  };
};
export let setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users
  };
};
export default usersReducer;
