import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from "./rootSaga";
import rootReducer from "./reducers/rootReducer";

// --------------------------------------------------------------------------------------------------------------------

const sagaMiddleware = createSagaMiddleware();
const { run } = sagaMiddleware;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

run(rootSaga);

// --------------------------------------------------------------------------------------------------------------------

export default store;
