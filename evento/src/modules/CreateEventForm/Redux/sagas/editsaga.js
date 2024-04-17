//editsagas.js
import { put, takeLatest, call } from "redux-saga/effects";
import {
  EDIT_ACTIONS,
  saveEventSuccess,
  saveEventFailure,
} from "../actions/editactions";
import { saveEventApi } from "../../api/editAPI";

function* saveEvent(action) {
  try {
    const response = yield call(saveEventApi, action.payload);
    yield put(saveEventSuccess(response.data));
  } catch (error) {
    yield put(saveEventFailure(error.message));
  }
}

function* editSaga() {
  yield takeLatest(EDIT_ACTIONS.SAVE_EVENT, saveEvent);
}

export default editSaga;
