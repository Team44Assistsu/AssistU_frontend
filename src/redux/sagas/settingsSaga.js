import { all, put, call, takeLatest } from "redux-saga/effects";
import { SETTINGS_ACTIONS, URLS } from "../constants";
// import { Store } from "react-notifications-component";
import {
  updateAvatarSuccess,
  updateAvatarError,
  updateCohostSuccess,
  updateCohostError,
  updateAlterPasswordSucess,
  updateAlterPasswordError,
  updateAlterProfImgSuccess,
  updateAlterProfImgError,
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
function* updateCohost(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      body: action.payload,
      url: URLS.COHOST_DETAILS_URL,
    });
    yield put(updateCohostSuccess(result.data));
  } catch (e) {
    yield put(updateCohostError(e.response.data));
  }
}
function* updateAlterPassword(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      body: action.payload,
      url: URLS.ALTER_PASSWORD_UPDATE_URL,
    });
    yield put(updateAlterPasswordSucess(result.data));
  } catch (e) {
    yield put(updateAlterPasswordError(e.response.data));
  }
}
function* updateAlterProfImg(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      body: action.payload,
      url: URLS.AVATAR_PROFILE_URL,
    });
    yield put(updateAlterProfImgSuccess(result.data));
  } catch (e) {
    yield put(updateAlterProfImgError(e.response.data));
  }
}
export default function* settingsSaga() {
  yield all([
    takeLatest(SETTINGS_ACTIONS.SETTINGS_AVATAR, updateAvatar),
    takeLatest(SETTINGS_ACTIONS.SETTINGS_AVATAR, updateCohost),
    takeLatest(SETTINGS_ACTIONS.SETTINGS_AVATAR, updateAlterPassword),
    takeLatest(SETTINGS_ACTIONS.SETTINGS_AVATAR, updateAlterProfImg),
  ]);
}
