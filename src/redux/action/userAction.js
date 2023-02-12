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
