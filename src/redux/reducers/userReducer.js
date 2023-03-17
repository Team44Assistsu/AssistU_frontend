import { USER_ACTIONS } from "../constants";

const initialState = {
  login: null,
  isLoggedIn: false,
  createPatient: null,
  isCreatePatient: false,
  createTherapist: null,
  isCreateTherapist: false,
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
        login: null,
        isLoggedIn: false,
      };
    case USER_ACTIONS.CREATE_PATIENT:
      return {
        ...state,
        isCreatePatient: false,
        createPatient: null,
      };
    case USER_ACTIONS.CREATE_PATIENT_SUCCESS:
      return {
        ...state,
        isCreatePatient: true,
        createPatient: action.payload,
      };
    case USER_ACTIONS.CREATE_PATIENT_ERROR:
      return {
        ...state,
        isCreatePatient: false,
        createPatient: null,
      };
    case USER_ACTIONS.CREATE_THERAPIST:
      return {
        ...state,
        isCreateTherapist: false,
        createTherapist: null,
      };
    case USER_ACTIONS.CREATE_THERAPIST_SUCCESS:
      return {
        ...state,
        isCreateTherapist: true,
        createTherapist: action.payload,
      };
    case USER_ACTIONS.CREATE_THERAPIST_ERROR:
      return {
        ...state,
        isCreateTherapist: false,
        createTherapist: null,
      };

    default:
      return state;
  }
}
