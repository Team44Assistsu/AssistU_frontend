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
