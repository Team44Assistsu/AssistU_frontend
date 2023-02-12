import { AVATAR_ACTIONS } from "../constants";

export function createAvatar(data) {
  return {
    type: AVATAR_ACTIONS.CREATE_AVATAR,
    payload: data,
  };
}

export function createAvatarSuccess(data) {
  return {
    type: AVATAR_ACTIONS.CREATE_AVATAR_SUCCESS,
    payload: data,
  };
}

export function createAvatarError(error) {
  return {
    type: AVATAR_ACTIONS.CREATE_AVATAR_ERROR,
    payload: error,
  };
}

export function getAvatar(data) {
  return {
    type: AVATAR_ACTIONS.GET_AVATAR,
    payload: data,
  };
}

export function getAvatarSuccess(data) {
  return {
    type: AVATAR_ACTIONS.GET_AVATAR_SUCCESS,
    payload: data,
  };
}

export function getAvatarError(error) {
  return {
    type: AVATAR_ACTIONS.GET_AVATAR_ERROR,
    payload: error,
  };
}
