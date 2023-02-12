import { all, put, call, takeLatest } from "redux-saga/effects";
import { MESSAGE_ACTIONS, URLS } from "../constants";
import {
  getMessageError,
  getMessageSuccess,
  sendMessageError,
  sendMessageSuccess,
} from "../action/messageActions";
import apiJunction from "../utils/api";

function* getMessage(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "get",
      url: URLS.GET_AVATAR_URL,
      headers: action.payload,
    });
    yield put(getMessageSuccess(result.data));
  } catch (e) {
    yield put(getMessageError(e.response.data));
  }
}

function* sendMessage(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      body: action.payload,
      url: URLS.CREATE_AVATAR_URL,
    });
    yield put(sendMessageSuccess(result.data));
  } catch (e) {
    yield put(sendMessageError(e.response.data));
  }
}

export default function* messageSaga() {
  yield all([
    takeLatest(MESSAGE_ACTIONS.CREATE_AVATAR, sendMessage),
    takeLatest(MESSAGE_ACTIONS.GET_AVATAR, getMessage),
  ]);
}
