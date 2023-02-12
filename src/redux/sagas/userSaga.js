import { all, put, call, takeLatest } from "redux-saga/effects";
import { USER_ACTIONS, URLS } from "../constants";
// import { Store } from "react-notifications-component";
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
    // Store.addNotification({
    //   title: "Error!!",
    //   message: e?.response?.data?.loginStatus || "Something went wrong",
    //   type: "danger",
    //   insert: "top",
    //   container: "top-right",
    //   animationIn: ["animate__animated", "animate__fadeIn"],
    //   animationOut: ["animate__animated", "animate__fadeOut"],
    //   dismiss: {
    //     duration: 5000,
    //     onScreen: true,
    //   },
    // });
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
