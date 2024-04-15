import { put, takeEvery } from "redux-saga/effects";
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
      console.log("No categories found");
    }
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
    console.error("Error fetching categories:", error);
  }
}

function* categoriesSaga() {
  yield takeEvery("FETCH_CATEGORIES_REQUEST", fetchCategoriesSaga);
}

export default categoriesSaga;
