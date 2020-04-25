const FOLLOW_AC = "FOLLOW_AC";
const UN_FOLLOW_AC = "UN_FOLLOW_AC";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'

let initialState = {
  users: [],
  pageSize : 4,
  totalUsersCount: 0,
  currentPage: 1
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
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state,  currentPage: action.currentPage};
    }
    case SET_USERS_TOTAL_COUNT: {
      return { ...state,  totalUsersCount: action.totalUsersCount};
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
    users,
  };
};
export let setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  };
};
export let setUsersTotalCountAC = (totalUsersCount) => {
  return {
    type: SET_USERS_TOTAL_COUNT,
    totalUsersCount
  };
};

export default usersReducer;
