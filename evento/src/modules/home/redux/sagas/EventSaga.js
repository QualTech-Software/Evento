import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_EVENTS_REQUEST,
  fetchEventsSuccess,
  fetchEventsFailure,
} from "../action/action";
import axios from "axios";

// Define a function to fetch events from the API
function* fetchEvents() {
  try {
    const response = yield axios.get("http://localhost:3000/api/events");
    console.log("Response:", response); // Log the response object // Extract data directly from the response

    const data = response.data;

    yield put(fetchEventsSuccess(data));
  } catch (error) {
    yield put(fetchEventsFailure(error.message));
  }
}

// Watch for FETCH_EVENTS_REQUEST action and call fetchEvents saga
function* watchFetchEvents() {
  yield takeLatest(FETCH_EVENTS_REQUEST, fetchEvents);
}

// Export the Saga function
export default function* EventSaga() {
  yield watchFetchEvents();
}
