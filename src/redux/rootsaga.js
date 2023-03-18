import { all } from "redux-saga/effects";
import UserSaga from "./sagas/userSaga";
import AvatarSaga from "./sagas/avatarSaga";
import MessageSaga from "./sagas/messageSaga";
import SettingsSaga from "./sagas/settingsSaga";

export default function* rootSaga() {
  yield all([UserSaga(), AvatarSaga(), MessageSaga(), SettingsSaga()]);
}
