import { GET_USERS, SELECT_USER, UPDATE_USER } from "../actions/ActionTypes";

const INITIAL_STATE = {
  users: [],
  selectedUser: {},
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: [...action.payload], loading: false };
    case SELECT_USER:
      return { ...state, selectedUser: action.payload };
    case UPDATE_USER:
      return {
        ...state,
        selectedUser: action.payload,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        )
      };
    default:
      return state;
  }
};
