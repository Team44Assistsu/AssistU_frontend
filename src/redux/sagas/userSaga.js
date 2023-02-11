import { all, put, call, takeLatest } from "redux-saga/effects";
import { USER_ACTIONS, URLS } from "../constants";
import { store } from "react-notifications-component";
import {
  loginError,
  loginSuccess,
  createPatientError,
  createPatientSuccess,
} from "../action/userAction";
import apiJunction from "../utils/api";

function* login(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      body: action.payload,
      url: URLS.LOGIN_URL,
    });
    yield put(loginSuccess(result.data));
  } catch (e) {
    store.addNotification({
      title: "Error!!",
      message: e.response && e.response.data && e.response.data.loginStatus,
      type: "danger",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 10000,
      },
    });
    yield put(loginError(e.response.data));
  }
}

function* createPatient(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      body: action.payload,
      url: URLS.CREATE_PATIENT_URL,
    });
    yield put(createPatientSuccess(result.data));
  } catch (e) {
    yield put(createPatientError(e.response.data));
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(USER_ACTIONS.LOGIN, login),
    takeLatest(USER_ACTIONS.CREATE_PATIENT, createPatient),
  ]);
}
