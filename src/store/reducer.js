import apiReducer from "./apiReducer";
import webReducer from "./webReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  apiReducer : apiReducer, 
  webReducer : webReducer, 
})

export default reducers ; 