import { SETTINGS_ACTIONS } from "../constants";

const initialState = {
  settingAvatar: null,
  isAvatarUpdated: false,
};

export function SettingsReducer(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_ACTIONS.SETTINGS_AVATAR:
      return {
        ...state,
        isAvatarUpdated: false,
        settingAvatar: null,
      };
    case SETTINGS_ACTIONS.SETTINGS_AVATAR_SUCCESS:
      return {
        ...state,
        isAvatarUpdated: true,
        settingAvatar: action.payload,
      };
    case SETTINGS_ACTIONS.SETTINGS_AVATAR_ERROR:
      return {
        ...state,
        isAvatarUpdated: false,
        settingAvatar: null,
      };

    default:
      return state;
  }
}
