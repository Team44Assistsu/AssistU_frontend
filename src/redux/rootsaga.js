import { all } from "redux-saga/effects";
// import UserSaga from "./sagas/userSaga";

export default function* rootSaga() {
  yield all([
    // UserSaga(),
  ]);
}
