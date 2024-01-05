import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducers } from "./Cart/Reducer";
import { orderReducers } from "./Order/Reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  products: customerProductReducer,
  carts: cartReducers,
  orders: orderReducers,
});

const store = createStore(rootReducers, applyMiddleware(thunk));
// const store = legacy_createStore(rootReducers, applyMiddleware(thunk));

export default store;
