import { put } from "redux-saga/effects";
import Api from "../apis/index";
import {
  GET_USER_HOBBIES,
  CREATE_HOBBY,
  GET_HOBBIES_NAMES
} from "../actions/ActionTypes";
import {
  getUserHobbiesSuccess,
  getHobbiesNamesSuccess,
  createHobbySuccess
} from "../actions/hobbies";

export function* getUserHobbiesSaga(action) {
  try {
    let queryParams = "";
    action.ids.map(id => (queryParams += `id=${id}&`));
    let response = [];
    if (queryParams) {
      response = yield Api.get(`/hobbies?${queryParams}`);
    }

    yield put(getUserHobbiesSuccess(GET_USER_HOBBIES, response.data));
  } catch (e) {
    yield console.error(e.message);
  }
}

export function* getHobbiesNamesSaga(action) {
  try {
    const response = yield Api.get(`/hobbies`);
    const hobbiesNames = response.data.map(hobby => ({
      id: hobby.id,
      name: hobby.name.toLowerCase()
    }));

    yield put(getHobbiesNamesSuccess(GET_HOBBIES_NAMES, hobbiesNames));
  } catch (e) {
    yield console.log(e.message);
  }
}

export function* createHobbySaga(action) {
  try {
    const response = yield Api.post("/hobbies", action.formData);

    yield put(createHobbySuccess(CREATE_HOBBY, response.data));
  } catch (e) {
    yield console.error(e.message);
  }
}
