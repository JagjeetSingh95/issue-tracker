import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import * as reducers from "./reducer";

const reducer = combineReducers({
  ...reducers
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;