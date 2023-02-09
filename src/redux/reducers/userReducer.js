import { USER_ACTIONS } from "../constants";

const initialState = {
  // isViewUser: false,
  // viewUser: [],
};

export function UserReducer(state = initialState, action) {
  switch (action.type) {
    // case USER_ACTIONS.DELETE_USER:
    //   return {
    //     ...state,
    //     isDeleteUser: false,
    //   };
    // case USER_ACTIONS.DELETE_USER_SUCCESS:
    //   return {
    //     ...state,
    //     isDeleteUser: true,
    //     deleteUser: action.payload,
    //   };
    // case USER_ACTIONS.DELETE_USER_ERROR:
    //   return {
    //     ...state,
    //     isDeleteUser: false,
    //   };

    default:
      return state;
  }
}
