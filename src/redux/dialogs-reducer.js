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
    case ADD_MESSAGE:
      let newMess = {
        id: 5,
        message: state.newMessagesText,
      };
      state.messagesData.push(newMess);
      state.newMessagesText = "";
      return state;
    case UPDATE_NEW_MESS:
      state.newMessagesText = action.newText;
      return state;

    default:
      return state;
  }
};

export let addMessActionCreator = () => {
  return {
    type: "ADD-MESSAGE",
  };
};
export let updateNewMessActionCreator = (text) => {
  return {
    type: "UPDATE-NEW-MESS",
    newText: text,
  };
};

export default dialogsReducer;
