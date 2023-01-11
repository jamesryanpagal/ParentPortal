import { call, put, takeLatest } from "redux-saga/effects";

// ? subject slice
import {
  getSubjects,
  getSubjectsSuccess,
} from "../../../slices/dashboard/dashboardSlice";

// ? request api
import { reqSubjects } from "../../api/dashboard/subjects";

function* subjectsRequest({ payload }) {
  try {
    const result = yield call(reqSubjects, payload);
    if (result.status !== 200) {
      console.log(result);
    } else {
      yield put(getSubjectsSuccess(result));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* subjectsSaga() {
  yield takeLatest(getSubjects.type, subjectsRequest);
}
