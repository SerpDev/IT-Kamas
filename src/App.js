import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs
            dialogsPage={props.state.dialogsPage}
            addMessage={props.addMessage}
            updateNewMess={props.updateNewMess}
          />
        )}
      />
      <Route
        path="/profile"
        render={() => (
          <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}
          />
        )}
      />
    </div>
  );
};

export default App;
