import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from './users-reduser';
import authReducer from './auth-reduser';

let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  usersReducer,
  authReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;
 