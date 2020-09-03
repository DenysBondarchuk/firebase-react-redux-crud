import {combineReducers} from "redux";

import medicalReducer from "./medicalReducer";
import modalReducer from "./modalReducer";

//---------------------------------------------------------------------------------------------------------------------

const rootReducer = combineReducers({
  medicalReducer,
  modalReducer
});

//---------------------------------------------------------------------------------------------------------------------

export default rootReducer;
