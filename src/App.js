import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Route
        path="/dialogs"
        render={() => <DialogsContainer />}
      />
      <Route
        path="/profile"
        render={() => <Profile />}
      />
    </div>
  );
};

export default App;
