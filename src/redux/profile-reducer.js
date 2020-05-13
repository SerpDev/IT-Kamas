import { profileApi } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postsData: [
    { id: 1, message: "Hello", likeCount: "15" },
    { id: 2, message: "How are you?", likeCount: "11" },
    { id: 3, message: "normal", likeCount: "65" },
    { id: 4, message: "Ok, bye!=)", likeCount: "17" },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postsData: [
          ...state.postsData,
          { id: 6, message: action.postText, likeCount: 0 },
        ],
      };
    }
    case SET_USERS_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};
export let addPostActionCreator = (postText) => {
  return {
    type: ADD_POST,
    postText,
  };
};

export let setUsersProfile = (profile) => {
  return {
    type: SET_USERS_PROFILE,
    profile,
  };
};

export let getUsersProfile = (userId) => (dispatch) => {
  profileApi.getProfileUser(userId).then((data) => {
    dispatch(setUsersProfile(data));
  });
};
export let setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};
export let getStatus = (userId) => (dispatch) => {
  profileApi.getStatus(userId).then((data) => {
    dispatch(setStatus(data));
  });
};

export let updateStatus = (status) => (dispatch) => {
  profileApi.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
