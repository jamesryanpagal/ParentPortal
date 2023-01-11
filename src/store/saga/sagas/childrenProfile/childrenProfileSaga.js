import { call, put, takeLatest } from "redux-saga/effects";

// ? children profile slices
import {
  getChildren,
  getChildrenSuccess,
  getChildrenError,
} from "../../../slices/childrenProfile/childrenProfileSlice";

// ? request api
import { reqGetChildrenProfile } from "../../api/childrenProfile/childrenProfile";

function* getChildrenRequest({ payload }) {
  try {
    const result = yield call(reqGetChildrenProfile);
    if (result.status !== 200) {
      yield put(
        getChildrenError({
          title: "Can't get children profile!",
          message: "Error while getting children profile!",
        })
      );
    } else {
      yield put(getChildrenSuccess(result));
    }
  } catch (error) {
    yield put(
      getChildrenError({
        title: "Can't get children profile!",
        message: "Error while getting children profile!",
      })
    );
  }
}

export default function* childrenProfileSaga() {
  yield takeLatest(getChildren.type, getChildrenRequest);
}
