import { call, put, takeLatest } from "redux-saga/effects";

// ? user authslice
import {
  login,
  loginSuccess,
  loginError,
  signUp,
  signUpSuccess,
  signUpError,
} from "../../../slices/auth/userAuthSlice";

// ? request api
import { reqSignUp } from "../../api/auth/signUpApi";
import { reqLogin } from "../../api/auth/loginApi";

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
    window.location.reload();
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

function* loginRequest({ payload }) {
  try {
    const result = yield call(reqLogin, payload);
    if (result?.response?.status === 400) {
      yield put(
        loginError({
          title: "Login Failed",
          message: result?.response?.data?.message,
        })
      );
    } else {
      yield put(loginSuccess(result));
    }
    window.location.reload();
  } catch (error) {
    const { status, data } = error.response;
    if (status === 401 || status === 403 || status === 400) {
      yield put(loginError({ title: "Login Failed", message: data.message }));
    } else {
      yield put(
        loginError({
          title: "Login Failed",
          message: "Please contact support.",
        })
      );
    }
  }
}

export default function* userAuthSaga() {
  yield takeLatest(signUp.type, signUpRequest);
  yield takeLatest(login.type, loginRequest);
}
