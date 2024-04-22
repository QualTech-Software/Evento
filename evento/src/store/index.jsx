// mainStore/index.js

import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import loginReducer from "../modules/login/redux/reducer/LoginReducer"; // Adjust the path if necessary
import loginSaga from "../modules/login/redux/sagas/LoginSaga";
import categoriesReducer from "../modules/Home/redux/reducers/categoriesReducer"; // Adjust the path if necessary
import categoriesSaga from "../modules/Home/redux/sagas/categoriesSaga"; // Adjust the path if necessary

const rootReducers = combineReducers({
  login: loginReducer,
  categories: categoriesReducer,
  // Add other reducers here if needed
});

const sagaMiddleware = createSagaMiddleware();

function* rootSagas() {
  yield all([
    loginSaga(),
    categoriesSaga(),
    // Add other sagas here if needed
  ]);
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
