import { combineReducers } from "redux";
import { UserReducer } from "./userReducer";
import { AvatarReducer } from "./avatarReducer";
import { MessageReducer } from "./messageReducer";
import { SettingsReducer } from "./settingsReducer";

export default combineReducers({
  /** add reducer here */
  UserReducer,
  AvatarReducer,
  MessageReducer,
  SettingsReducer,
});
