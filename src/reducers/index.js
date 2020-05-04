import formVisibleReducer from './form-visible-reducer';
import selectedSurveyReducer from './selected-survey-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  selectedSurvey: selectedSurveyReducer,
  formVisible: formVisibleReducer,
  firestore: firestoreReducer
});

export default rootReducer;