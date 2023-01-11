import { call, put, takeLatest } from "redux-saga/effects";
import {
  signUp,
  signUpError,
  signUpSuccess,
} from "../../../slices/auth/signUpSlice";

import { reqSignUp } from "../../api/auth/signUpApi";

function* signUpRequest({ payload }) {
  try {
    const result = yield call(reqSignUp, payload);
    if (result?.response?.status === 400) {
      yield put(
        signUpError({
          title: "Login Failed",
          message: result?.response?.data?.message,
        })
      );
    } else {
      yield put(signUpSuccess(result));
    }
  } catch (error) {
    const { status, data } = error.response;
    if (status === 401 || status === 403 || status === 400) {
      yield put(signUpError({ title: "Login Failed", message: data.message }));
    } else {
      yield put(
        signUpError({
          title: "Login Failed",
          message: "Please contact support.",
        })
      );
    }
  }
}

export default function* signUpSaga() {
  yield takeLatest(signUp.type, signUpRequest);
}
