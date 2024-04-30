// mainStore/index.js

import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import loginReducer from "../modules/login/redux/reducer/LoginReducer"; // Adjust the path if necessary
import loginSaga from "../modules/login/redux/sagas/LoginSaga";
import categoriesReducer from "../modules/Home/redux/reducers/categoriesReducer"; // Adjust the path if necessary
import categoriesSaga from "../modules/Home/redux/sagas/categoriesSaga"; // Adjust the path if necessary
import editReducer from "../modules/CreateEventForm/Redux/reducer/editReducer";
import editSaga from "../modules/CreateEventForm/Redux/sagas/editsaga";
import EventReducer from "../modules/events/redux/reducer/EventReducer";
import EventSaga from "../modules/events/redux/sagas/EventSaga";
const rootReducers = combineReducers({
  login: loginReducer,
  categories: categoriesReducer,
  edit: editReducer,
  event: EventReducer,
});
const sagaMiddleware = createSagaMiddleware();

function* rootSagas() {
  yield all([loginSaga(), categoriesSaga(), editSaga(), EventSaga()]);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};

const store = createStore(
  rootReducers,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);

export default store;
