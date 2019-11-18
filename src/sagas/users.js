import { put } from "redux-saga/effects";
import { GET_USERS, SELECT_USER, UPDATE_USER } from "../actions/ActionTypes";
import {
  getUsersSuccess,
  selectUserSuccess,
  updateUserSuccess
} from "../actions/users";
import Api from "../apis/index";

export function* getUsersSaga(action) {
  try {
    const response = yield Api.get("/users");
    yield put(getUsersSuccess(GET_USERS, response.data));
  } catch (e) {
    yield console.error(e.message);
  }
}

export function* selectUserSaga(action) {
  yield put(selectUserSuccess(SELECT_USER, action.user));
}

export function* updateUserSaga(action) {
  try {
    const response = yield Api.patch(
      `/users/${action.userData.id}`,
      action.userData
    );
    yield put(updateUserSuccess(UPDATE_USER, response.data));
  } catch (e) {
    yield console.error(e.message);
  }
}
