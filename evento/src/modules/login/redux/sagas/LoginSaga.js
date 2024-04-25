import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { loginSuccess, loginFailure } from "../action/actionTypes"; // Adjust the path if necessary
import { LOGIN_REQUEST } from "../action/actionTypes"; // Adjust the path if necessary

export default function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function* login(action) {
  try {
    const response = yield call(
      axios.post,
      "http://localhost:3000/api/login",
      action.payload
    );
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}
