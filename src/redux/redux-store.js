import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;
 