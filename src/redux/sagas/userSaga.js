import { all, put, call, takeLatest } from "redux-saga/effects";
import { USER_ACTIONS, URLS } from "../constants";
import {
  loginError,
  loginSuccess,
  createPatientError,
  createPatientSuccess,
  createTherapistError,
  createTherapistSuccess,
  getPatientsError,
  getPatientsSuccess,
  sendOtpError,
  sendOtpSuccess,
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
    yield put(loginError(e.response.data));
  }
}

function* sendOtp(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      headers: action.payload,
      url: URLS.SEND_OTP_URL,
    });
    yield put(sendOtpSuccess(result.data));
  } catch (e) {
    yield put(sendOtpError(e.response.data));
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

function* createTherapist(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      body: action.payload,
      url: URLS.CREATE_THERAPIST_URL,
    });
    yield put(createTherapistSuccess(result.data));
  } catch (e) {
    yield put(createTherapistError(e.response.data));
  }
}

function* getPatients(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "get",
      headers: action.payload,
      url: URLS.GET_PATIENTS_URL,
    });
    yield put(getPatientsSuccess(result.data));
  } catch (e) {
    yield put(getPatientsError(e.response.data));
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(USER_ACTIONS.LOGIN, login),
    takeLatest(USER_ACTIONS.CREATE_PATIENT, createPatient),
    takeLatest(USER_ACTIONS.CREATE_THERAPIST, createTherapist),
    takeLatest(USER_ACTIONS.GET_PATIENTS, getPatients),
    takeLatest(USER_ACTIONS.OTP, sendOtp),
  ]);
}
