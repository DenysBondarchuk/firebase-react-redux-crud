import { all } from 'redux-saga/effects';

import {
  watchDataFetch,
  watchItemAdd,
  watchItemEdit,
  watchItemDelete,
  watchItemUpdate,
  watchItemCreate,
} from './sagas/dataSaga';

// --------------------------------------------------------------------------------------------------------------------

function* rootSaga() {
  yield all([
    watchDataFetch(),
    watchItemAdd(),
    watchItemEdit(),
    watchItemDelete(),
    watchItemUpdate(),
    watchItemCreate(),
  ]);
}

// --------------------------------------------------------------------------------------------------------------------

export default rootSaga;
