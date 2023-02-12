import { all } from "redux-saga/effects";
import UserSaga from "./sagas/userSaga";
import AvatarSaga from "./sagas/avatarSaga";

export default function* rootSaga() {
  yield all([UserSaga(), AvatarSaga()]);
}
