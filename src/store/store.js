import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducer from "./slices/rootReducer";

//SAGA
import createSagaMiddleware from "redux-saga";
// import loginSaga from "./saga/sagas/auth/loginSaga";
// import signUpSaga from "./saga/sagas/auth/signUpSaga";
import userAuthSaga from "./saga/sagas/auth/userAuthSaga";
import getGradeRecordsSaga from "./saga/sagas/gradeRecords/gradeRecordsSaga";
import updateUserDetailsSaga from "./saga/sagas/auth/updateUsersDetailsSaga";
import subjectsSaga from "./saga/sagas/dashboard/subjectsSaga";
import quartersSaga from "./saga/sagas/dashboard/quartersSaga";
import childrenProfileSaga from "./saga/sagas/childrenProfile/childrenProfileSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(saga),
});

//RUN SAGA
// saga.run(loginSaga);
// saga.run(signUpSaga);
saga.run(userAuthSaga);
saga.run(getGradeRecordsSaga);
saga.run(updateUserDetailsSaga);
saga.run(subjectsSaga);
saga.run(quartersSaga);
saga.run(childrenProfileSaga);

export const persistor = persistStore(store);
export default store;
