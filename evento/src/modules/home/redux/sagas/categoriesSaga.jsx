import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from "../actions/categoriesActions";

// Worker Saga: Fetch categories data from the API for IDs 1 to 6
function* fetchCategoriesSaga() {
  try {
    let allCategories = [];

    // Loop through IDs 1 to 6 and fetch categories data for each ID
    for (let i = 1; i <= 6; i++) {
      const response = yield axios.get(
        `http://localhost:3000/api/category/${i}`
      );
      const data = response.data;

      if (data.success && data.categories.length > 0) {
        // If data is successfully fetched, add it to the allCategories array
        allCategories = [...allCategories, ...data.categories];
      } else {
        console.log(`No data found for category ID ${i}`);
      }
    }

    // Dispatch a success action with the fetched categories
    yield put(fetchCategoriesSuccess(allCategories));
  } catch (error) {
    // If an error occurs during the request, dispatch a failure action with the error
    yield put(fetchCategoriesFailure(error));
    console.error("Error fetching categories:", error);
  }
}

// Watcher Saga: Watches for FETCH_CATEGORIES_REQUEST actions and calls fetchCategoriesSaga
function* categoriesSaga() {
  yield takeEvery("FETCH_CATEGORIES_REQUEST", fetchCategoriesSaga);
}

export default categoriesSaga;
