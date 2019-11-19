import { reset } from "redux-form";
import {
  INITIATE_GET_USER_HOBBIES,
  INITIATE_CREATE_HOBBY,
  INITIATE_GET_HOBBIES_NAMES
} from "./ActionTypes";

export const getUserHobbies = ids => dispatch => {
  dispatch({
    type: INITIATE_GET_USER_HOBBIES,
    ids
  });
};

export const getUserHobbiesSuccess = (type, payload) => ({ type, payload });

export const getHobbiesNames = () => dispatch => {
  dispatch({
    type: INITIATE_GET_HOBBIES_NAMES
  });
};

export const getHobbiesNamesSuccess = (type, payload) => ({ type, payload });

export const createHobby = formData => dispatch => {
  dispatch({
    type: INITIATE_CREATE_HOBBY,
    formData
  });
};

export const createHobbySuccess = (type, payload) => dispatch => {
  dispatch({ type, payload });
  dispatch({
    type: INITIATE_GET_HOBBIES_NAMES
  });
  dispatch(reset("CreateHobbyForm"));
  alert("New hobby created");
};
