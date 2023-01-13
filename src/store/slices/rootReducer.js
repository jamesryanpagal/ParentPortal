import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import loginReducer, { loginSlice } from "./auth/loginSlice";
// import signUpReducer, { signUpSlice } from "./auth/signUpSlice";
import userAuthReducer, { userAuthSlice } from "./auth/userAuthSlice";
import gradeRecordReducer, {
  gradeRecordsSlice,
} from "./gradeRecords/gradeRecordSlice";
import dashboardReducers, { dashboardSlice } from "./dashboard/dashboardSlice";
import childrenProfileReducers, {
  childrenProfileSlice,
} from "./childrenProfile/childrenProfileSlice";

// ? create instance in local storage add more if needed
const authPersistConfig = {
  key: "userAuth",
  version: 1,
  storage,
  whiteList: ["userAuthSlice"],
};

const rootReducer = combineReducers({
  [userAuthSlice.name]: persistReducer(authPersistConfig, userAuthReducer),
  [gradeRecordsSlice.name]: gradeRecordReducer,
  [dashboardSlice.name]: dashboardReducers,
  [childrenProfileSlice.name]: childrenProfileReducers,
  // [loginSlice.name]: persistReducer(authPersistConfig, loginReducer),
  // [signUpSlice.name]: signUpReducer,
});

export default rootReducer;
