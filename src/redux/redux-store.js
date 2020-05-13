import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from './users-reduser';
import authReducer from './auth-reduser';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  usersReducer,
  authReducer,
  form : formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
 