import { USER_ACTIONS } from "../constants";

const initialState = {
  login: null,
  isLoggedIn: false,
};

export function UserReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ACTIONS.LOGIN:
      return {
        ...state,
        isLoggedIn: false,
        login: null,
      };
    case USER_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        login: action.payload,
      };
    case USER_ACTIONS.LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        login: action.payload,
      };

    default:
      return state;
  }
}
