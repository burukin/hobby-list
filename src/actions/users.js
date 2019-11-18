import {
  INITIATE_GET_USERS,
  INITIATE_SELECT_USER,
  INITIATE_UPDATE_USER
} from "./ActionTypes";

export const getUsers = () => dispatch => {
  dispatch({
    type: INITIATE_GET_USERS
  });
};

export const getUsersSuccess = (type, payload) => ({ type, payload });

export const selectUser = user => dispatch => {
  dispatch({
    type: INITIATE_SELECT_USER,
    user
  });
};

export const selectUserSuccess = (type, payload) => ({ type, payload });

export const updateUser = userData => dispatch => {
  dispatch({
    type: INITIATE_UPDATE_USER,
    userData
  });
};

export const updateUserSuccess = (type, payload) => ({ type, payload });
