import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";

const rootReducers = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));
// const store = legacy_createStore(rootReducers, applyMiddleware(thunk));

export default store;
