import { combineReducers } from "redux";

import shoppingReducer from "./reducers/shopping";


export default combineReducers({
  shopping: shoppingReducer
});