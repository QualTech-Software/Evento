// redux/reducers/editReducer.js
import { EDIT_ACTIONS } from "../actions/editactions";

const initialState = {
  eventData: {},
  loading: false,
  error: null,
};

const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_ACTIONS.SAVE_EVENT_SUCCESS:
      return {
        ...state,
        eventData: action.payload,
        loading: false,
        error: null,
      };
    case EDIT_ACTIONS.SAVE_EVENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default editReducer;
