import {
  GET_USER_HOBBIES,
  GET_HOBBIES_NAMES,
  INITIATE_GET_USER_HOBBIES
} from "../actions/ActionTypes";

const INITIAL_STATE = {
  hobbies: [],
  loading: false,
  hobbiesNames: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIATE_GET_USER_HOBBIES:
      return { ...state, loading: true };
    case GET_USER_HOBBIES:
      return { ...state, hobbies: action.payload, loading: false };
    case GET_HOBBIES_NAMES:
      return { ...state, hobbiesNames: action.payload };
    default:
      return state;
  }
};
