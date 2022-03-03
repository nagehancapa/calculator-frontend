import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";

const rootReducer = combineReducers({
  appState,
  user,
});

export default rootReducer;
