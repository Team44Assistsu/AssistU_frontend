import { all, put, call, takeLatest } from "redux-saga/effects";
import { AVATAR_ACTIONS, URLS } from "../constants";
import {
  getAvatarError,
  getAvatarSuccess,
  createAvatarError,
  createAvatarSuccess,
} from "../action/avatarActions";
import apiJunction from "../utils/api";

function* getAvatar(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "get",
      url: URLS.GET_AVATAR_URL,
      headers: action.payload,
    });
    yield put(getAvatarSuccess(result.data));
  } catch (e) {
    yield put(getAvatarError(e.response.data));
  }
}

function* createAvatar(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      body: action.payload,
      url: URLS.CREATE_AVATAR_URL,
    });
    yield put(createAvatarSuccess(result.data));
  } catch (e) {
    yield put(createAvatarError(e.response.data));
  }
}

export default function* avatarSaga() {
  yield all([
    takeLatest(AVATAR_ACTIONS.CREATE_AVATAR, createAvatar),
    takeLatest(AVATAR_ACTIONS.GET_AVATAR, getAvatar),
  ]);
}
