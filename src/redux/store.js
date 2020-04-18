// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";

// let store = {
//   _state: {
//     profilePage: {
//       postsData: [
//         { id: 1, message: "Hello", likeCount: "15" },
//         { id: 2, message: "How are you?", likeCount: "11" },
//         { id: 3, message: "normal", likeCount: "65" },
//         { id: 4, message: "Ok, bye!=)", likeCount: "17" },
//       ],
//       newPostText: "Введите текст",
//     },
//     dialogsPage: {
//       dialogsData: [
//         { id: 1, name: "Dimych" },
//         { id: 2, name: "Vasya" },
//         { id: 3, name: "Dasha" },
//         { id: 4, name: "Sasha" },
//       ],
//       messagesData: [
//         { id: 1, message: "Привет" },
//         { id: 2, message: "Как дела?" },
//         { id: 3, message: "Все ок" },
//         { id: 4, message: "Пока" },
//       ],
//       newMessagesText: "учи фронт",
//     },
//   },

//   _callSubscriber() {
//     console.log("state changed");
//   },

//   getState() {
//     return this._state;
//   },

//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },

//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

//     this._callSubscriber(this._state)
//   },
// };




// export default store;
// window.store = store;
