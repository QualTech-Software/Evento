import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

export const loginRequest = (credentials) => ({
  type: LOGIN_REQUEST,
  payload: credentials,
});

const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login = (credentials) => {
  return async (dispatch) => {
    console.log(
      "Dispatching loginRequest action with credentials:",
      credentials
    );

    dispatch(loginRequest(credentials));

    try {
      const response = await axios.post(
        "http://localhost:3000/api/login",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login request successful:", response);

      if (response.status === 200) {
        if (response.data && response.data.success) {
          dispatch(loginSuccess(response.data.user));
        } else {
          dispatch(loginFailure("Email or password is incorrect"));
        }
      } else {
        dispatch(loginFailure("Unexpected response"));
      }
    } catch (error) {
      console.error("Login request error:", error);
      dispatch(loginFailure(error.message));
    }
  };
};
