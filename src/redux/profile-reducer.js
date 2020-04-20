const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsData: [
    { id: 1, message: "Hello", likeCount: "15" },
    { id: 2, message: "How are you?", likeCount: "11" },
    { id: 3, message: "normal", likeCount: "65" },
    { id: 4, message: "Ok, bye!=)", likeCount: "17" },
  ],
  newPostText: "Введите текст",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        newPostText: "",
        postsData: [
          ...state.postsData,
          { id: 5, message: state.newPostText, likeCount: 0 },
        ],
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    default:
      return state;
  }
};
export let addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export let updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
