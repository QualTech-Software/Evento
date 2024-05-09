// sagas/imageSaga.js
import { takeLatest, call, put } from "redux-saga/effects";
import {
  UPLOAD_IMAGES_REQUEST,
  uploadImagesSuccess,
  uploadImagesFailure,
} from "../actions/imageActions";
import { imageApi } from "../../api/imageAPI";

function* uploadImages(action) {
  try {
    const { payload: files } = action;
    const uploadedFilePaths = [];
    for (const file of files) {
      const filePath = yield call(imageApi, file);
      uploadedFilePaths.push(filePath);
    }
    // Dispatch success action with uploaded file paths
    yield put(uploadImagesSuccess(uploadedFilePaths));
  } catch (error) {
    // Dispatch failure action if any error occurs
    yield put(uploadImagesFailure(error.message));
  }
}

function* imageSaga() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

export default imageSaga;
