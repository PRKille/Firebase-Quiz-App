import * as c from './../../actions/ActionTypes';
import selectedSurveyReducer from '../../reducers/selected-survey-reducer';

describe('selectedSurveyReducer', () => {

  const selectedSurvey = {
    id: 'stringid',
    creator: 'random string'
    title: 'Is geoff good at redux',
    instructions: 'On a scale of 1 to 5 answer how well Geoff knows redux',
    question1: 'Can geoff figure out how to decrement in redux',
    question2: 'Dummy Text',
    question3: 'Dummy Text',
    question4: 'Dummy Text',
    question5: 'Dummy Text',
    question6: 'Dummy Text'
  }

  test('should return default state if no action type is recognized', () => {
    expect(selectedSurveyReducer(null, { type: null })).toEqual(null);
  });
  test('Should successfully set selectedSurvey to the Survey passed to the reducer', () => {
   const action = {
      type: c.SELECT_SURVEY,
      id: 'stringid',
      creator: 'random string'
      title: 'Is geoff good at redux',
      instructions: 'On a scale of 1 to 5 answer how well Geoff knows redux',
      question1: 'Can geoff figure out how to decrement in redux',
      question2: 'Dummy Text',
      question3: 'Dummy Text',
      question4: 'Dummy Text',
      question5: 'Dummy Text',
      question6: 'Dummy Text'
    }
    expect(selectedSurveyReducer(null, action)).toEqual(selectedSurvey);
  });

  test('should successfully unselect a survey and return null', () => {
    const action = {
      type: c.UNSELECT_SURVEY
    };
    expect(selectedSurveyReducer(selectedSurvey, action)).toEqual(null);
  });
});