import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../action/actionTypes";

const initialState = {
  isLoggedIn: false,
  error: null,
  userData: null, // Add this field to store user data
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        requestCompleted: 0,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        error: null,
        userData: action.payload, // Store user data
        requestCompleted: 1,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload,
        userData: null, // Clear user data on login failure
        requestCompleted: 1,
      };
    default:
      return state;
  }
};

export default loginReducer;
