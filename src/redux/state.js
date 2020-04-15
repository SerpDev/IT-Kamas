let rerenderEntireThree = () => {
  console.log('state changed');
}
let state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hello", likeCount: "15" },
      { id: 2, message: "How are you?", likeCount: "11" },
      { id: 3, message: "normal", likeCount: "65" },
      { id: 4, message: "Ok, bye!=)", likeCount: "17" },
    ],
    newPostText : 'Введите текст',
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
    newMessagesText : 'учи фронт'
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireThree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireThree(state);
}

export let addMessage = () => {
  let newMess = {
    id : 5,
    message : state.dialogsPage.newMessagesText,
  };
  state.dialogsPage.messagesData.push(newMess);
  state.dialogsPage.newMessagesText = "";
  rerenderEntireThree(state);
}

export let updateNewMess = (newText) => {
  state.dialogsPage.newMessagesText = newText;
  rerenderEntireThree(state);
}

export let subscribe = (observer) => {
  rerenderEntireThree = observer;
}

export default state;
