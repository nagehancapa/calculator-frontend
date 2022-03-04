import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import history from "./history/reducer";

const rootReducer = combineReducers({
  appState,
  user,
  history,
});

export default rootReducer;
