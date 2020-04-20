const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESS = "UPDATE-NEW-MESS";

let initialState = {
  dialogsData: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Vasya" },
    { id: 3, name: "Dasha" },
    { id: 4, name: "Sasha" },
  ],
  messagesData: [
    { id: 1, message: "Привет" },
    { id: 2, message: "Как дела?" },
    { id: 3, message: "Все ок" },
    { id: 4, message: "Пока" },
  ],
  newMessagesText: "учи фронт",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        newMessagesText: "",
        messagesData: [
          ...state.messagesData,
          { id: 5, message: state.newMessagesText },
        ],
      };
    }
    case UPDATE_NEW_MESS: {
      return { ...state, newMessagesText: action.newText };
    }
    default:
      return state;
  }
};

export let addMessActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};
export let updateNewMessActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESS,
    newText: text,
  };
};

export default dialogsReducer;
