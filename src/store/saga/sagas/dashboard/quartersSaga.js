import { call, put, takeLatest } from "redux-saga/effects";

// ? dashboard slice
import {
  getFirstQuarters,
  getFirstQuarterSuccess,
  getFirstQuarterError,
  getSecondQuarters,
  getSecondQuarterSuccess,
  getSecondQuarterError,
  getThirdQuarters,
  getThirdQuarterSuccess,
  getThirdQuarterError,
  getFourthQuarters,
  getFourthQuarterSuccess,
  getFourthQuarterError,
} from "../../../slices/dashboard/dashboardSlice";

// ? request api
import { reqQuarters } from "../../api/dashboard/quarters";

// ? first quarter
function* firstQuarterRequest({ payload }) {
  try {
    const result = yield call(reqQuarters, payload);
    if (result.status !== 200) {
      yield put(
        getFirstQuarterError({
          title: "Can't get first quarter",
          message: "Error while getting grade records!",
        })
      );
    } else {
      yield put(getFirstQuarterSuccess(result));
    }
  } catch (error) {
    yield put(
      getFirstQuarterError({
        title: "Can't get first quarter",
        message: "Error while getting grade records!",
      })
    );
  }
}

// ? second quarter
function* secondQuarterRequest({ payload }) {
  try {
    const result = yield call(reqQuarters, payload);
    if (result.status !== 200) {
      yield put(
        getSecondQuarterError({
          title: "Can't get first quarter",
          message: "Error while getting grade records!",
        })
      );
    } else {
      yield put(getSecondQuarterSuccess(result));
    }
  } catch (error) {
    yield put(
      getSecondQuarterError({
        title: "Can't get first quarter",
        message: "Error while getting grade records!",
      })
    );
  }
}

// ? third quarter
function* thirdQuarterRequest({ payload }) {
  try {
    const result = yield call(reqQuarters, payload);
    if (result.status !== 200) {
      yield put(
        getThirdQuarterError({
          title: "Can't get first quarter",
          message: "Error while getting grade records!",
        })
      );
    } else {
      yield put(getThirdQuarterSuccess(result));
    }
  } catch (error) {
    yield put(
      getThirdQuarterError({
        title: "Can't get first quarter",
        message: "Error while getting grade records!",
      })
    );
  }
}

// ? fourth quarter
function* fourthQuarterRequest({ payload }) {
  try {
    const result = yield call(reqQuarters, payload);
    if (result.status !== 200) {
      yield put(
        getFourthQuarterError({
          title: "Can't get first quarter",
          message: "Error while getting grade records!",
        })
      );
    } else {
      yield put(getFourthQuarterSuccess(result));
    }
  } catch (error) {
    yield put(
      getFourthQuarterError({
        title: "Can't get first quarter",
        message: "Error while getting grade records!",
      })
    );
  }
}

export default function* quartersSaga() {
  yield takeLatest(getFirstQuarters.type, firstQuarterRequest);
  yield takeLatest(getSecondQuarters.type, secondQuarterRequest);
  yield takeLatest(getThirdQuarters.type, thirdQuarterRequest);
  yield takeLatest(getFourthQuarters.type, fourthQuarterRequest);
}
