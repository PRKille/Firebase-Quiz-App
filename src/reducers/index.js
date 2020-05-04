import formVisibleReducer from './form-visible-reducer';
import selectedSurveyReducer from './selected-survey-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedSurvey: selectedSurveyReducer,
  formVisible: formVisibleReducer
});

export default rootReducer;