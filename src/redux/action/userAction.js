import { USER_ACTIONS } from "../constants";

export function login(data) {
  return {
    type: USER_ACTIONS.LOGIN,
    payload: data,
  };
}

export function loginSuccess(data) {
  return {
    type: USER_ACTIONS.LOGIN_SUCCESS,
    payload: data,
  };
}

export function loginError(error) {
  return {
    type: USER_ACTIONS.LOGIN_ERROR,
    payload: error,
  };
}

export function sendOtp(data) {
  return {
    type: USER_ACTIONS.OTP,
    payload: data,
  };
}

export function sendOtpSuccess(data) {
  return {
    type: USER_ACTIONS.OTP_SUCCESS,
    payload: data,
  };
}

export function sendOtpError(error) {
  return {
    type: USER_ACTIONS.OTP_ERROR,
    payload: error,
  };
}

export function createPatient(data) {
  return {
    type: USER_ACTIONS.CREATE_PATIENT,
    payload: data,
  };
}

export function createPatientSuccess(data) {
  return {
    type: USER_ACTIONS.CREATE_PATIENT_SUCCESS,
    payload: data,
  };
}

export function createPatientError(error) {
  return {
    type: USER_ACTIONS.CREATE_PATIENT_ERROR,
    payload: error,
  };
}

export function createTherapist(data) {
  return {
    type: USER_ACTIONS.CREATE_THERAPIST,
    payload: data,
  };
}

export function createTherapistSuccess(data) {
  return {
    type: USER_ACTIONS.CREATE_THERAPIST_SUCCESS,
    payload: data,
  };
}

export function createTherapistError(error) {
  return {
    type: USER_ACTIONS.CREATE_THERAPIST_ERROR,
    payload: error,
  };
}

export function getPatients(data) {
  return {
    type: USER_ACTIONS.GET_PATIENTS,
    payload: data,
  };
}

export function getPatientsSuccess(data) {
  return {
    type: USER_ACTIONS.GET_PATIENTS_SUCCESS,
    payload: data,
  };
}

export function getPatientsError(error) {
  return {
    type: USER_ACTIONS.GET_PATIENTS_ERROR,
    payload: error,
  };
}
