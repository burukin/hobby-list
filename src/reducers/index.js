import { combineReducers } from "redux";
import users from "./users";
import hobbies from "./hobbies";
import { reducer as reduxFormReducer } from "redux-form";

export default combineReducers({
  users,
  hobbies,
  form: reduxFormReducer
});
