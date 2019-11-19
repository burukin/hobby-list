import { takeEvery } from "redux-saga/effects";

import {
  INITIATE_GET_USERS,
  INITIATE_UPDATE_USER,
  INITIATE_GET_USER_HOBBIES,
  INITIATE_CREATE_HOBBY,
  INITIATE_GET_HOBBIES_NAMES
} from "../actions/ActionTypes";
import { getUsersSaga, updateUserSaga } from "./users";
import {
  getUserHobbiesSaga,
  getHobbiesNamesSaga,
  createHobbySaga
} from "./hobbies";

export function* watchGetUsers() {
  yield takeEvery(INITIATE_GET_USERS, getUsersSaga);
  yield takeEvery(INITIATE_UPDATE_USER, updateUserSaga);
  yield takeEvery(INITIATE_GET_USER_HOBBIES, getUserHobbiesSaga);
  yield takeEvery(INITIATE_CREATE_HOBBY, createHobbySaga);
  yield takeEvery(INITIATE_GET_HOBBIES_NAMES, getHobbiesNamesSaga);
}
