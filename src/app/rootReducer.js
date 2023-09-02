import { combineReducers } from "@reduxjs/toolkit";
import globalReducer from "./_slice/globalSlice";
const rootReducer = combineReducers({
  global: globalReducer,
});

export default rootReducer;
