// import { all, put, call, takeLatest } from "redux-saga/effects";
// import { USER_ACTIONS, URLS } from "../constants";
// import { store } from "react-notifications-component";
// import { getUserByIdError, getUserByIdSuccess } from "../action/userAction";
// import apiJunction from "../utils/api";

// function* addUser(action) {
//   try {
//     const result = yield call(apiJunction.makeRequest, {
//       method: "post",
//       body: action.payload,
//       url: URLS.ADD_USER,
//     });
//     yield put(addUserData(result.data));
//   } catch (e) {
//     store.addNotification({
//       title: "Error!!",
//       message: e.response && e.response.data && e.response.data.message,
//       type: "danger",
//       container: "top-right",
//       animationIn: ["animated", "fadeIn"],
//       animationOut: ["animated", "fadeOut"],
//       dismiss: {
//         duration: 10000,
//       },
//     });
//     yield put(addUserData(e.response));
//   }
// }

// function* getUserById(action) {
//   try {
//     const result = yield call(apiJunction.makeRequest, {
//       method: "get",
//       // body: action.payload,
//       url: `/api/user/get?id=${action.payload.id}`,
//     });
//     yield put(getUserByIdSuccess(result.data));
//   } catch (e) {
//     yield put(getUserByIdError(e.response));
//   }
// }

// export default function* userSaga() {
//   yield all([takeLatest(USER_ACTIONS.GET_USER_BY_ID, getUserById)]);
// }
