import { ADD, DATA, DELETE, EDIT, UPDATE, CREATE } from '../../constants/actionTypes';

// --------------------------------------------------------------------------------------------------------------------

export const dataFetch = () => ({
  type: DATA.FETCH,
});

export const dataRequested = () => ({
  type: DATA.REQUESTED,
});

export const dataRequestedSuccess = (payload) => ({
  type: DATA.REQUESTED_SUCCESS,
  payload,
});

export const dataRequestedError = () => ({
  type: DATA.REQUESTED_ERROR,
});

// --------------------------------------------------------------------------------------------------------------------

export const addItem = (payload) => ({
  type: ADD.ITEM,
  payload,
});

export const addItemSuccess = (payload) => ({
  type: ADD.ITEM_SUCCESS,
  payload,
});

// --------------------------------------------------------------------------------------------------------------------

export const deleteItem = (payload) => ({
  type: DELETE.ITEM,
  payload,
});

export const deleteItemSuccess = (payload) => ({
  type: DELETE.ITEM_SUCCESS,
  payload,
});

// --------------------------------------------------------------------------------------------------------------------

export const updateItem = (payload) => ({
  type: UPDATE.ITEM,
  payload,
});

export const updateItemSuccess  = (payload) => ({
  type: UPDATE.ITEM_SUCCESS,
  payload,
});

// --------------------------------------------------------------------------------------------------------------------


export const editItem = (payload) => ({
  type: EDIT.ITEM,
  payload,
});

export const editItemStart = (payload) => ({
  type: EDIT.ITEM_START,
  payload,
});

export const editItemClear = () => ({
  type: EDIT.ITEM_CLEAR,
});

// --------------------------------------------------------------------------------------------------------------------

export const itemCreate = () => ({
  type: CREATE.ITEM
});


