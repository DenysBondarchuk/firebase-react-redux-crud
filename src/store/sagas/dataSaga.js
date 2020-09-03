import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import {
  dataRequested,
  dataRequestedSuccess,
  dataRequestedError,
  addItemSuccess,
  deleteItemSuccess,
  editItem,
  editItemClear,
  updateItemSuccess,
} from '../actions';
import { addItemFirebase, dataFetchFirebase, deleteItemFirebase, updateItemFirebase } from '../../services/CRUD';
import { toggleModal } from '../actions/modalActions';

// --------------------------------------------------------------------------------------------------------------------

function* dataFetch() {
  try {
    yield put(dataRequested());
    const data = yield call(dataFetchFirebase);
    yield put(dataRequestedSuccess(data));
  } catch (error) {
    yield put(dataRequestedError());
  }
}

export function* watchDataFetch() {
  yield takeEvery('DATA_FETCH', dataFetch);
}

// --------------------------------------------------------------------------------------------------------------------

function* itemAdd({ payload }) {
  const data = yield call(addItemFirebase, payload);
  yield put(addItemSuccess(data));
  yield put(toggleModal());
}


export function* watchItemAdd() {
  yield takeLatest('ADD_ITEM', itemAdd);
}

// --------------------------------------------------------------------------------------------------------------------

function* itemEdit({ payload }) {
  yield put(editItem(payload));

  yield put(toggleModal());
}

export function* watchItemEdit() {
  yield takeLatest('EDIT_ITEM_START', itemEdit);
}

// --------------------------------------------------------------------------------------------------------------------

function* itemDelete({ payload }) {
  const id = yield call(deleteItemFirebase, payload);
  yield put(deleteItemSuccess(id));
}

export function* watchItemDelete() {
  yield takeLatest('DELETE_ITEM', itemDelete);
}

// --------------------------------------------------------------------------------------------------------------------

function* itemUpdate({ payload }) {
  const data = yield call(updateItemFirebase, payload);
  yield put(updateItemSuccess(data));
  yield put(editItemClear());
  yield put(toggleModal());
}

export function* watchItemUpdate() {
  yield takeLatest('UPDATE_ITEM', itemUpdate);
}

// --------------------------------------------------------------------------------------------------------------------


function* itemCreate() {
  yield put(editItemClear());
  yield put(toggleModal());
}

export function* watchItemCreate() {
  yield takeLatest('ITEM_CREATE', itemCreate);
}

// --------------------------------------------------------------------------------------------------------------------

