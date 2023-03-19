import { SETTINGS_ACTIONS } from "../constants";

const initialState = {
  settingAvatar: null,
  isAvatarUpdated: false,
  settingCoHost: null,
  isCoHostUpdated: false,
  settingPassword: null,
  isPasswordUpdated: false,
  settingProfile: null,
  isSettingProfile: false,
  settingsGetAvatar: null,
  isGetAvatarDetails: false,
  settingLoginPassword: null,
  isSettngLoginPassword: false,
  settingGetAlter: null,
  isSettingGetAlter: false,
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
    case SETTINGS_ACTIONS.SETTINGS_GET_AVATAR_LIST:
      return {
        ...state,
        isGetAvatarDetails: false,
        settingsGetAvatar: null,
      };
    case SETTINGS_ACTIONS.SETTINGS_GET_AVATAR_LIST_SUCCESS:
      return {
        ...state,
        isGetAvatarDetails: true,
        settingsGetAvatar: action.payload,
      };
    case SETTINGS_ACTIONS.SETTINGS_GET_AVATAR_LIST_ERROR:
      return {
        ...state,
        isGetAvatarDetails: false,
        settingsGetAvatar: null,
      };
    case SETTINGS_ACTIONS.SETTINGS_COHOST:
      return {
        ...state,
        isCoHostUpdated: false,
        settingCoHost: null,
      };
    case SETTINGS_ACTIONS.SETTINGS_COHOST_SUCCESS:
      return {
        ...state,
        isCoHostUpdated: true,
        settingCoHost: action.payload,
      };
    case SETTINGS_ACTIONS.SETTINGS_COHOST_ERROR:
      return {
        ...state,
        isCoHostUpdated: false,
        settingCoHost: null,
      };
    case SETTINGS_ACTIONS.SETTINGS_PASSWORD:
      return {
        ...state,
        isPasswordUpdated: false,
        settingPassword: null,
      };
    case SETTINGS_ACTIONS.SETTINGS_PASSWORD_SUCCESS:
      return {
        ...state,
        isPasswordUpdated: true,
        settingPassword: action.payload,
      };
    case SETTINGS_ACTIONS.SETTINGS_PASSWORD_ERROR:
      return {
        ...state,
        isPasswordUpdated: false,
        settingPassword: null,
      };
    case SETTINGS_ACTIONS.SETTINGS_AVATAR_PROFILE:
      return {
        ...state,
        isSettingProfile: false,
        settingProfile: null,
      };
    case SETTINGS_ACTIONS.SETTINGS_AVATAR_PROFILE_SUCCESS:
      return {
        ...state,
        isSettingProfile: true,
        settingProfile: action.payload,
      };
    case SETTINGS_ACTIONS.SETTINGS_AVATAR_PROFILE_ERROR:
      return {
        ...state,
        isSettingProfile: false,
        settingProfile: null,
      };
    case SETTINGS_ACTIONS.SETTINGS_LOGIN_PASSWORD:
      return {
        ...state,
        isSettngLoginPassword: false,
        settingLoginPassword: null,
      };
    case SETTINGS_ACTIONS.SETTINGS_LOGIN_PASSWORD_SUCCESS:
      return {
        ...state,
        isSettngLoginPassword: true,
        settingLoginPassword: action.payload,
      };
    case SETTINGS_ACTIONS.SETTINGS_LOGIN_PASSWORD_ERROR:
      return {
        ...state,
        isSettngLoginPassword: false,
        settingLoginPassword: null,
      };
    case SETTINGS_ACTIONS.SETTINGS_GET_ALTER:
      return {
        ...state,
        isSettingGetAlter: false,
        settingGetAlter: null,
      };
    case SETTINGS_ACTIONS.SETTINGS_GET_ALTER_SUCCESS:
      return {
        ...state,
        isSettingGetAlter: true,
        settingGetAlter: action.payload,
      };
    case SETTINGS_ACTIONS.SETTINGS_GET_ALTER_ERROR:
      return {
        ...state,
        isSettingGetAlter: false,
        settingGetAlter: null,
      };
    default:
      return state;
  }
}
