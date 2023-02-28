import { AVATAR_ACTIONS } from "../constants";

const initialState = {
  getAvatar: null,
  isGetAvatar: false,
  createAvatar: null,
  isCreateAvatar: false,
  checkPin: null,
  isPin: false,
};

export function AvatarReducer(state = initialState, action) {
  switch (action.type) {
    case AVATAR_ACTIONS.GET_AVATAR:
      return {
        ...state,
        isGetAvatar: false,
        getAvatar: null,
      };
    case AVATAR_ACTIONS.GET_AVATAR_SUCCESS:
      return {
        ...state,
        isGetAvatar: true,
        getAvatar: action.payload,
      };
    case AVATAR_ACTIONS.GET_AVATAR_ERROR:
      return {
        ...state,
        getAvatar: null,
        isGetAvatar: false,
      };
    case AVATAR_ACTIONS.CREATE_AVATAR:
      return {
        ...state,
        isCreateAvatar: false,
        createAvatar: null,
      };
    case AVATAR_ACTIONS.CREATE_AVATAR_SUCCESS:
      return {
        ...state,
        isCreateAvatar: true,
        createAvatar: action.payload,
      };
    case AVATAR_ACTIONS.CREATE_AVATAR_ERROR:
      return {
        ...state,
        isCreateAvatar: false,
        createAvatar: null,
      };
    case AVATAR_ACTIONS.CHECK_PIN:
      return {
        ...state,
        isPin: false,
        checkPin: null,
      };
    case AVATAR_ACTIONS.CHECK_PIN_SUCCESS:
      return {
        ...state,
        isPin: true,
        checkPin: action.payload,
      };
    case AVATAR_ACTIONS.CHECK_PIN_ERROR:
      return {
        ...state,
        isPin: false,
        checkPin: null,
      };

    default:
      return state;
  }
}
