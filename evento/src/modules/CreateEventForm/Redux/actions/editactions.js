// redux/actions/editActions.js
export const EDIT_ACTIONS = {
  SAVE_EVENT: "SAVE_EVENT",
  SAVE_EVENT_SUCCESS: "SAVE_EVENT_SUCCESS",
  SAVE_EVENT_FAILURE: "SAVE_EVENT_FAILURE",
};

export const saveEvent = (eventData) => ({
  type: EDIT_ACTIONS.SAVE_EVENT,
  payload: eventData,
});

export const saveEventSuccess = (data) => ({
  type: EDIT_ACTIONS.SAVE_EVENT_SUCCESS,
  payload: data,
});

export const saveEventFailure = (error) => ({
  type: EDIT_ACTIONS.SAVE_EVENT_FAILURE,
  payload: error,
});
