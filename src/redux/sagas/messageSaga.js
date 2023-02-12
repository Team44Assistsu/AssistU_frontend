import { all, put, call, takeLatest } from "redux-saga/effects";
import { MESSAGE_ACTIONS, URLS } from "../constants";
import {
  getMessageError,
  getMessageSuccess,
  sendMessageError,
  sendMessageSuccess,
  viewMessageError,
  viewMessageSuccess,
} from "../action/messageActions";
import apiJunction from "../utils/api";

function* getMessage(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "get",
      url: URLS.GET_MESSAGE_URL,
      headers: action.payload,
    });
    yield put(getMessageSuccess(result.data));
  } catch (e) {
    yield put(getMessageError(e.response.data));
  }
}

function* viewMessage(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "get",
      url: URLS.VIEW_MESSAGE_URL,
      headers: action.payload,
    });
    yield put(viewMessageSuccess(result.data));
  } catch (e) {
    yield put(viewMessageError(e.response.data));
  }
}

function* sendMessage(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      body: action.payload,
      url: URLS.SEND_MESSAGE_URL,
    });
    yield put(sendMessageSuccess(result.data));
  } catch (e) {
    yield put(sendMessageError(e.response.data));
  }
}

export default function* messageSaga() {
  yield all([
    takeLatest(MESSAGE_ACTIONS.SEND_MESSAGE, sendMessage),
    takeLatest(MESSAGE_ACTIONS.GET_MESSAGE, getMessage),
    takeLatest(MESSAGE_ACTIONS.VIEW_MESSAGE, viewMessage),
  ]);
}
