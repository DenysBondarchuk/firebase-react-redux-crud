import { DATA, ADD, DELETE, EDIT, UPDATE } from '../../constants/actionTypes';

const initialState = {
  medicalList: [],
  loading: false,
  editItem: null,
};

// --------------------------------------------------------------------------------------------------------------------

const medicalReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA.REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case DATA.REQUESTED_SUCCESS:
      return {
        ...state,
        medicalList: [...action.payload],
        loading: false,
      };
    case DATA.REQUESTED_ERROR:
      return {
        ...state,
        loading: false,
      };
    case ADD.ITEM_SUCCESS:
      return {
        ...state,
        medicalList: [...state.medicalList, action.payload],
      };
    case DELETE.ITEM_SUCCESS:
      return {
        ...state,
        medicalList: [...state.medicalList.filter(item => item.id !== action.payload)]
      };
    case EDIT.ITEM:
      return {
        ...state,
        editItem: state.medicalList.filter(item => item.id === action.payload)[0]
      };
    case EDIT.ITEM_CLEAR:
      return {
        ...state,
        editItem: null,
      };
    case UPDATE.ITEM_SUCCESS:
      return {
        ...state,
        medicalList: [...state.medicalList.map(item => item.id === action.payload.id ? action.payload : item)]
      };
    default:
      return state;
  }
};

// --------------------------------------------------------------------------------------------------------------------

export default medicalReducer;
