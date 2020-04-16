let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hello", likeCount: "15" },
        { id: 2, message: "How are you?", likeCount: "11" },
        { id: 3, message: "normal", likeCount: "65" },
        { id: 4, message: "Ok, bye!=)", likeCount: "17" },
      ],
      newPostText: "Введите текст",
    },
    dialogsPage: {
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
    },
  },

  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // addPost() {},

  // updateNewPostText(newText) {},

  addMessage() {
    let newMess = {
      id: 5,
      message: this._state.dialogsPage.newMessagesText,
    };
    this._state.dialogsPage.messagesData.push(newMess);
    this._state.dialogsPage.newMessagesText = "";
    this._callSubscriber(this._state);
  },

  updateNewMess(newText) {
    this._state.dialogsPage.newMessagesText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
