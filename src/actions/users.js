import {
  INITIATE_GET_USERS,
  INITIATE_UPDATE_USER,
  SELECT_USER
} from "./ActionTypes";

export const getUsers = () => dispatch => {
  dispatch({
    type: INITIATE_GET_USERS
  });
};

export const getUsersSuccess = (type, payload) => ({ type, payload });

export const selectUser = user => dispatch => {
  dispatch({
    type: SELECT_USER,
    payload: user
  });
};

export const updateUser = userData => dispatch => {
  dispatch({
    type: INITIATE_UPDATE_USER,
    userData
  });
};

export const updateUserSuccess = (type, payload) => ({ type, payload });
