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
  getAlterListSuccess,
  getAlterListError,
  updateLoginPasswordSuccess,
  updateLoginPasswordError,
  getAlterByIdSuccess,
  getAlterByIdError,
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
function* getAlterList(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "get",
      headers: action.payload,
      url: URLS.COHOST_GETAVATAR_DETAILS,
    });
    yield put(getAlterListSuccess(result.data));
  } catch (e) {
    yield put(getAlterListError(e.response.data));
  }
}
function* getAlterById(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "get",
      headers: action.payload,
      url: URLS.GET_ALTER_DETAIL_BYID,
    });
    console.log(result.data);
    yield put(getAlterByIdSuccess(result.data));
  } catch (e) {
    yield put(getAlterByIdError(e.response.data));
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
function* updateLoginPassword(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      body: action.payload,
      url: URLS.LOGIN_PASSWORD_UPDATE_URL,
    });
    yield put(updateLoginPasswordSuccess(result.data));
  } catch (e) {
    yield put(updateLoginPasswordError(e.response.data));
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
    takeLatest(SETTINGS_ACTIONS.SETTINGS_GET_AVATAR_LIST, getAlterList),
    takeLatest(SETTINGS_ACTIONS.SETTINGS_GET_ALTER, getAlterById),
    takeLatest(SETTINGS_ACTIONS.SETTINGS_COHOST, updateCohost),
    takeLatest(SETTINGS_ACTIONS.SETTINGS_PASSWORD, updateAlterPassword),
    takeLatest(SETTINGS_ACTIONS.SETTINGS_LOGIN_PASSWORD, updateLoginPassword),
    takeLatest(SETTINGS_ACTIONS.SETTINGS_AVATAR_PROFILE, updateAlterProfImg),
  ]);
}
