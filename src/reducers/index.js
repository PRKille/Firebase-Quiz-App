import formVisibleReducer from './form-visible-reducer';
import selectedSurveyReducer from './selected-survey-reducer';
import editingReducer from './editing-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  selectedSurvey: selectedSurveyReducer,
  formVisible: formVisibleReducer,
  editing: editingReducer,
  firestore: firestoreReducer
});

export default rootReducer;