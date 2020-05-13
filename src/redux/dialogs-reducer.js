const ADD_MESSAGE = "ADD-MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: 6, message: action.messText },
        ],
      };
    }
    default:
      return state;
  }
};

export let addMessActionCreator = (messText) => {
  return {
    type: ADD_MESSAGE,
    messText
  };
};

export default dialogsReducer;
