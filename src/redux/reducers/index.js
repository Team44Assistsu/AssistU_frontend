import { combineReducers } from "redux";
import { UserReducer } from "./userReducer";
import { AvatarReducer } from "./avatarReducer";
import { MessageReducer } from "./messageReducer";

export default combineReducers({
  /** add reducer here */
  UserReducer,
  AvatarReducer,
  MessageReducer,
});
