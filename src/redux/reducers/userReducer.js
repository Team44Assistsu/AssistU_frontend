import { USER_ACTIONS } from "../constants";

const initialState = {
  login: null,
  isLoggedIn: false,
  createPatient: null,
  isCreatePatient: false,
  createTherapist: null,
  isCreateTherapist: false,
  getPatients: null,
  isPatientList: false,
  sendOtp: null,
  isSendOtp: false,
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
    case USER_ACTIONS.OTP:
      return {
        ...state,
        isSendOtp: false,
        sendOtp: null,
      };
    case USER_ACTIONS.OTP_SUCCESS:
      return {
        ...state,
        isSendOtp: true,
        sendOtp: action.payload,
      };
    case USER_ACTIONS.OTP_ERROR:
      return {
        ...state,
        sendOtp: null,
        isSendOtp: false,
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
    case USER_ACTIONS.GET_PATIENTS:
      return {
        ...state,
        isPatientList: false,
        getPatients: null,
      };
    case USER_ACTIONS.GET_PATIENTS_SUCCESS:
      return {
        ...state,
        isPatientList: true,
        getPatients: action.payload,
      };
    case USER_ACTIONS.GET_PATIENTS_ERROR:
      return {
        ...state,
        isPatientList: false,
        getPatients: null,
      };

    default:
      return state;
  }
}
