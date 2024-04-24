import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from "../actions/categoriesActions";

function* fetchCategoriesSaga() {
  try {
    const response = yield axios.get(
      "http://localhost:3000/api/categories/main"
    );

    const { data } = response;

    if (data?.success && data?.categories?.length > 0) {
      yield put(fetchCategoriesSuccess(data?.categories));
    } else {
    }
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

function* categoriesSaga() {
  yield takeLatest("FETCH_CATEGORIES_REQUEST", fetchCategoriesSaga);
}

export default categoriesSaga;
