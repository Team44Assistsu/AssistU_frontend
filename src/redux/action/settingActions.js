import { SETTINGS_ACTIONS } from "../constants";

export function updateAvatar(data) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_AVATAR,
    payload: data,
  };
}

export function updateAvatarSuccess(data) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_AVATAR_SUCCESS,
    payload: data,
  };
}

export function updateAvatarError(error) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_AVATAR_ERROR,
    payload: error,
  };
}
export function getAlterList(data) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_GET_AVATAR_LIST,
    payload: data,
  };
}

export function getAlterListSuccess(data) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_GET_AVATAR_LIST_SUCCESS,
    payload: data,
  };
}

export function getAlterListError(error) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_GET_AVATAR_LIST_ERROR,
    payload: error,
  };
}
export function updateCohost(data) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_COHOST,
    payload: data,
  };
}

export function updateCohostSuccess(data) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_COHOST_SUCCESS,
    payload: data,
  };
}

export function updateCohostError(error) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_COHOST_ERROR,
    payload: error,
  };
}
export function updateAlterPassword(data) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_PASSWORD,
    payload: data,
  };
}

export function updateAlterPasswordSucess(data) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_PASSWORD_SUCCESS,
    payload: data,
  };
}

export function updateAlterPasswordError(error) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_PASSWORD_ERROR,
    payload: error,
  };
}
export function updateAlterProfImg(data) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_AVATAR_PROFILE,
    payload: data,
  };
}

export function updateAlterProfImgSuccess(data) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_AVATAR_PROFILE_SUCCESS,
    payload: data,
  };
}

export function updateAlterProfImgError(error) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_AVATAR_PROFILE_ERROR,
    payload: error,
  };
}
export function updateLoginPassword(data) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_LOGIN_PASSWORD,
    payload: data,
  };
}

export function updateLoginPasswordSuccess(data) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_LOGIN_PASSWORD_SUCCESS,
    payload: data,
  };
}

export function updateLoginPasswordError(error) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_LOGIN_PASSWORD_ERROR,
    payload: error,
  };
}
export function getAlterById(data) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_GET_ALTER,
    payload: data,
  };
}

export function getAlterByIdSuccess(data) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_GET_ALTER_SUCCESS,
    payload: data,
  };
}

export function getAlterByIdError(error) {
  return {
    type: SETTINGS_ACTIONS.SETTINGS_GET_ALTER_ERROR,
    payload: error,
  };
}
