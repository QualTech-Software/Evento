import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import categoriesReducer from "../modules/Home/redux/reducers/categoriesReducer";
import categoriesSaga from "../modules/Home/redux/sagas/categoriesSaga";
import editReducer from "../modules/CreateEventForm/Redux/reducer/editReducer";
import editSaga from "../modules/CreateEventForm/Redux/sagas/editsaga";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  edit: editReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
  yield all([
    categoriesSaga(),
    editSaga(),
    // Add more sagas as needed
  ]);
}
sagaMiddleware.run(rootSaga);

export default store;
