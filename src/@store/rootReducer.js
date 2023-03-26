import { combineReducers } from "@reduxjs/toolkit";
import app from "./main/appSlice";
import job from "./main/jobSlice";

const reducer = combineReducers({

  job,
  app,
  // here we will be adding reducers
});
export default reducer;
