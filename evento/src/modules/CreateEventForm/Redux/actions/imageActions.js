// redux/actions/imageActions.js

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

export const uploadImagesRequest = (files) => ({
  type: UPLOAD_IMAGES_REQUEST,
  payload: files,
});

export const uploadImagesSuccess = () => ({
  type: UPLOAD_IMAGES_SUCCESS,
});

export const uploadImagesFailure = (error) => ({
  type: UPLOAD_IMAGES_FAILURE,
  payload: error,
});
