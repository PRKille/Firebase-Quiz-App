import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import selectedSurveyReducer from '../../reducers/selected-survey-reducer';
import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  let action;

  test('Should return default if no action is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      formVisible: false,
      selectedSurvey: null,
      editing: false
    });
  });

  test('check if initial state of formVisibleReducer matches root', () => {
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, {type: null}));
  });
  
  test('check if initial state of selectedSurveyReducer matches root', () => {
    expect(store.getState().selectedSurvey).toEqual(selectedSurveyReducer(undefined, {type: null}));
  });

  test('Check that toggle form action of formVisibleReducer matches root reducer', () => {
    action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, action));
  });

  test('check that select survey action of selectedSurveyReducer matches rootReducer', () => {
    action = {
      type: c.SELECT_SURVEY,
      id: 'id',
      creator: 'random string',
      title: 'example',
      instructions: 'example',
      question1: 'question',
      question2: 'question',
      question3: 'question',
      question4: 'question',
      question5: 'question',
      question6: 'question'
    }
    store.dispatch(action);
    expect(store.getState().selectedSurvey).toEqual(selectedSurveyReducer(undefined, action));
  });

  test('check that unselect survey action of selectedSurveyReducer matches rootReducer', () => {
    const survey = {
      title: 'example',
      id: 'id',
      creator: 'random string',
      instructions: 'example',
      question1: 'question',
      question2: 'question',
      question3: 'question',
      question4: 'question',
      question5: 'question',
      question6: 'question'
    };
    action = {
      type: c.UNSELECT_SURVEY
    };
    store.dispatch(action);
    expect(store.getState().selectedSurvey).toEqual(selectedSurveyReducer(survey, action));
  });
});