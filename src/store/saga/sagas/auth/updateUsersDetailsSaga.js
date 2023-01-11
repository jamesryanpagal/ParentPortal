import { call, put, takeLatest } from "redux-saga/effects";

// ? user authslice
import {
  updateUsersDetails,
  updateUserDetailsSuccess,
  updateUserDetailsError,
} from "../../../slices/auth/userAuthSlice";

// ? api request
import { reqUpdateUsersDetails } from "../../api/auth/updateUsersDetailsApi";
import { reqUserProfile } from "../../api/userProfile/userProfile";

function* updateUsersDetailsRequest({ payload }) {
  try {
    const updateResult = yield call(reqUpdateUsersDetails, payload);
    if (updateResult?.response?.status === 400) {
      yield put(
        updateUserDetailsError({
          title: "Update Failed",
          message: updateResult?.response?.data?.message,
        })
      );
    } else {
      const getProfile = yield call(reqUserProfile);
      if (getProfile?.response?.status === 400) {
        yield put(
          updateUserDetailsError({
            title: "Error while getting user detals",
            message: getProfile?.response?.data?.message,
          })
        );
      }
      yield put(
        updateUserDetailsSuccess({ getProfile, message: "Profile Updated!" })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* updateUserDetailsSaga() {
  yield takeLatest(updateUsersDetails.type, updateUsersDetailsRequest);
}
