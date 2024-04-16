import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import categoriesReducer from "../reducers/categoriesReducer";
import categoriesSaga from "../sagas/categoriesSaga";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  // Other reducers can be added here if needed
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(categoriesSaga);

export default store;
