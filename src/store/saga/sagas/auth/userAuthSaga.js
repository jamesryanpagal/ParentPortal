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
    if (result.status === 200) {
      yield put(signUpSuccess(result));
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      yield put(
        loginError({
          title: "Login Failed",
          message: `Invalid credentials`,
        })
      );
    }
  } catch (error) {
    yield put(
      signUpError({
        title: "Signup Failed",
        message: `Unkown error occured with status code of ${error.response.status}`,
      })
    );
  }
}

function* loginRequest({ payload }) {
  try {
    const result = yield call(reqLogin, payload);
    if (result.status === 200) {
      yield put(loginSuccess(result));
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      yield put(
        loginError({
          title: "Login Failed",
          message: `Invalid credentials`,
        })
      );
    }
  } catch (error) {
    yield put(
      loginError({
        title: "Login Failed",
        message: `Unkown error occured with status code of ${error.response.status}`,
      })
    );
  }
}

export default function* userAuthSaga() {
  yield takeLatest(signUp.type, signUpRequest);
  yield takeLatest(login.type, loginRequest);
}
