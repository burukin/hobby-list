import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import createSagaMiddleware from 'redux-saga';
import { watchGetUsers } from "./sagas/index";

const initialStore = {};
const sagaMiddleware = createSagaMiddleware();

const middleWare = [thunk, sagaMiddleware];


const store = createStore(
  rootReducer,
  initialStore,
  composeWithDevTools(applyMiddleware(...middleWare))
);

sagaMiddleware.run(watchGetUsers);

export default store;
