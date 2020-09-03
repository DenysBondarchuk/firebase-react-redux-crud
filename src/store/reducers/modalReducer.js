const initialState = {
  isShown: false,
};

//---------------------------------------------------------------------------------------------------------------------

const modalReducer = (state = initialState, action) => {
  if (action.type === 'TOGGLE_MODAL') {
    return {
      ...state,
      isShown: !state.isShown
    };
  } else {
    return state;
  }
};

//---------------------------------------------------------------------------------------------------------------------

export default modalReducer;
