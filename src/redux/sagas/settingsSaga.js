import { all, put, call, takeLatest } from "redux-saga/effects";
import { SETTINGS_ACTIONS, URLS } from "../constants";
// import { Store } from "react-notifications-component";
import {
  updateAvatarSuccess,
  updateAvatarError,
} from "../action/settingActions";
import apiJunction from "../utils/api";

function* updateAvatar(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      body: action.payload,
      url: URLS.AVATAR_DETAILS_URL,
    });
    yield put(updateAvatarSuccess(result.data));
  } catch (e) {
    yield put(updateAvatarError(e.response.data));
  }
}
export default function* settingsSaga() {
  yield all([takeLatest(SETTINGS_ACTIONS.SETTINGS_AVATAR, updateAvatar)]);
}
