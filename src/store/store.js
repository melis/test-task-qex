import { createStore, applyMiddleware, combineReducers } from "redux";

import reduxThunk from "redux-thunk";
import news from "./newsReduser/newsReduser";
import user from "./userReduser/userReduser";

export const store = createStore(
  combineReducers({ news, user }),
  applyMiddleware(reduxThunk)
);

export default store;
