// redux/reducers/index.js
import { combineReducers } from "redux";
import editReducer from "./editReducer";

const rootReducer = combineReducers({
  edit: editReducer,
});

export default rootReducer;
