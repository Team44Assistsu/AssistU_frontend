import { MESSAGE_ACTIONS } from "../constants";

const initialState = {
  getMessage: null,
  isGetMessage: false,
  sendMessage: null,
  isSendMessage: false,
};

export function MessageReducer(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_ACTIONS.GET_MESSAGE:
      return {
        ...state,
        isGetMessage: false,
        getMessage: null,
      };
    case MESSAGE_ACTIONS.GET_MESSAGE_SUCCESS:
      return {
        ...state,
        isGetMessage: true,
        getMessage: action.payload,
      };
    case MESSAGE_ACTIONS.GET_MESSAGE_ERROR:
      return {
        ...state,
        getMessage: null,
        isGetMessage: false,
      };
    case MESSAGE_ACTIONS.SEND_MESSAGE:
      return {
        ...state,
        isSendMessage: false,
        sendMessage: null,
      };
    case MESSAGE_ACTIONS.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        isSendMessage: true,
        sendMessage: action.payload,
      };
    case MESSAGE_ACTIONS.SEND_MESSAGE_ERROR:
      return {
        ...state,
        isSendMessage: false,
        sendMessage: null,
      };

    default:
      return state;
  }
}
