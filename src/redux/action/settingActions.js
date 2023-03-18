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
