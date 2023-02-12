import { combineReducers } from "redux";
import { UserReducer } from "./userReducer";
import { AvatarReducer } from "./avatarReducer";

export default combineReducers({
  /** add reducer here */
  UserReducer,
  AvatarReducer,
});
