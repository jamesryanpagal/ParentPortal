import { call, put, takeLatest } from "redux-saga/effects";

// ? grade record slice
import {
  getGradeRecords,
  getGradeRecordsSuccess,
  getGradeRecordsError,
} from "../../../slices/gradeRecords/gradeRecordSlice";

// ? request api
import { reqGradeRecords } from "../../api/gradeRecord/gradeRecord";

function* getGradeRecordsRequest({ payload }) {
  try {
    const result = yield call(reqGradeRecords, payload);
    if (result.status !== 200) {
      yield put(
        getGradeRecordsError({
          title: payload,
          message: "Error while getting grade records!",
        })
      );
    } else {
      yield put(getGradeRecordsSuccess(result));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* getGradeRecordsSaga() {
  yield takeLatest(getGradeRecords.type, getGradeRecordsRequest);
}
