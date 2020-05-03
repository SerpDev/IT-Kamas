import { usersAPI } from "./../api/api";

const FOLLOW_AC = "FOLLOW_AC";
const UN_FOLLOW_AC = "UN_FOLLOW_AC";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOOGLE_LOADER = "TOOGLE_LOADER";
const TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgres: [],
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
      return { ...state, currentPage: action.currentPage };
    }
    case SET_USERS_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    case TOOGLE_LOADER: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOOGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgres: action.isFetching
          ? [...state.followingInProgres, action.userId]
          : state.followingInProgres.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};
export let followSuccess = (userId) => {
  return {
    type: FOLLOW_AC,
    userId,
  };
};
export let unFollowSuccess = (userId) => {
  return {
    type: UN_FOLLOW_AC,
    userId,
  };
};
export let setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export let setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export let setUsersTotalCount = (totalUsersCount) => {
  return {
    type: SET_USERS_TOTAL_COUNT,
    totalUsersCount,
  };
};
export let toogleLoader = (isFetching) => {
  return {
    type: TOOGLE_LOADER,
    isFetching,
  };
};

export let toogleIsFollowingProgress = (isFetching, userId) => {
  return {
    type: TOOGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toogleLoader(false));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toogleLoader(true));
      dispatch(setUsers(data.items));
      dispatch(setUsersTotalCount(data.totalCount));
    });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toogleIsFollowingProgress(true, userId));
    usersAPI.followAPI(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toogleIsFollowingProgress(false, userId));
    });
  };
};
export const unFollow = (userId) => {
  return (dispatch) => {
    dispatch(toogleIsFollowingProgress(true, userId));
    usersAPI.unFollowAPI(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unFollowSuccess(userId));
      }
      dispatch(toogleIsFollowingProgress(false, userId));
    });
  };
};

export default usersReducer;
