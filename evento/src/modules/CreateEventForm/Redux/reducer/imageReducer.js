// redux/reducers/imageReducer.js
import {
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
} from "../actions/imageActions";

const initialState = {
  uploading: false,
  uploadedFilePaths: [],
  error: null,
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGES_REQUEST:
      return { ...state, uploading: true, error: null };
    case UPLOAD_IMAGES_SUCCESS:
      return { ...state, uploading: false, error: null };
    case UPLOAD_IMAGES_FAILURE:
      return { ...state, uploading: false, error: action.payload };
    default:
      return state;
  }
};

export default imageReducer;
