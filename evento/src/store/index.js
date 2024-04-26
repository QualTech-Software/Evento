import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import EventReducer from "../modules/Home/redux/reducer/EventReducer";
import EventSaga from "../modules/Home/redux/sagas/EventSaga";
const rootReducers = combineReducers({
  event: EventReducer,
});
const sagaMiddleware = createSagaMiddleware();

function* rootSagas() {
  yield all([EventSaga()]);
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
