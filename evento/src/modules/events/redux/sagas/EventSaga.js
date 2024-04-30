import { call, all, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_EVENTS_REQUEST,
  FETCH_FILTERED_EVENTS_REQUEST,
  fetchEventsSuccess,
  fetchEventsFailure,
} from "../action/action";
import axios from "axios";

// Define a function to fetch events from the API
function* fetchEvents() {
  try {
    const response = yield axios.get("http://localhost:3000/api/events");
    const data = response.data;

    yield put(fetchEventsSuccess(data));
  } catch (error) {
    yield put(fetchEventsFailure(error.message));
  }
}

function* fetchFilteredEvents({ payload }) {
  try {
    const response = yield axios.post(
      "http://localhost:3000/api/filtered-events",
      payload
    );

    const data = response.data;

    yield put(fetchEventsSuccess(data));
  } catch (error) {
    yield put(fetchEventsFailure(error.message));
  }
}

function* watchFetchEvents() {
  yield takeLatest(FETCH_EVENTS_REQUEST, fetchEvents);
}
function* watchFetchFilterEvents() {
  yield takeLatest(FETCH_FILTERED_EVENTS_REQUEST, fetchFilteredEvents);
}

export default function* EventSaga() {
  yield watchFetchFilterEvents();
}
