import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { loginSuccess, loginFailure } from "../action/actionTypes"; 
import { LOGIN_REQUEST } from "../action/actionTypes"; 
function* handleLoginSuccess(token) {
 
  console.log("Token:", token);
  const expirationTime = new Date().getTime() +  (2 * 60 * 1000); 
  console.log(new Date().getTime() + (2 * 60 * 1000));
  localStorage.setItem("token", token);
  localStorage.setItem("expirationTime", expirationTime);
  
  setTimeout(() => {
    removeToken();
  }, 120000);
}

function removeToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");
}

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
    console.log("Response data:", response.data); // Log response data
    const token = response.data.token; // Extract token from response
    if (token) {
      
      yield put(loginSuccess(token)); // Pass token to action
      yield call(handleLoginSuccess, token); // Call handleLoginSuccess with token
    } else {
      yield put(loginFailure("Token not found in response"));
    }
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}
