import { MESSAGE_ACTIONS } from "../constants";

export function sendMessage(data) {
  return {
    type: MESSAGE_ACTIONS.SEND_MESSAGE,
    payload: data,
  };
}

export function sendMessageSuccess(data) {
  return {
    type: MESSAGE_ACTIONS.SEND_MESSAGE_SUCCESS,
    payload: data,
  };
}

export function sendMessageError(error) {
  return {
    type: MESSAGE_ACTIONS.SEND_MESSAGE_ERROR,
    payload: error,
  };
}

export function getMessage(data) {
  return {
    type: MESSAGE_ACTIONS.GET_MESSAGE,
    payload: data,
  };
}

export function getMessageSuccess(data) {
  return {
    type: MESSAGE_ACTIONS.GET_MESSAGE_SUCCESS,
    payload: data,
  };
}

export function getMessageError(error) {
  return {
    type: MESSAGE_ACTIONS.GET_MESSAGE_ERROR,
    payload: error,
  };
}
