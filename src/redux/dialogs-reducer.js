const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESS = "UPDATE-NEW-MESS";

const dialogsReducer = (state, action) => {
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

export default dialogsReducer;
