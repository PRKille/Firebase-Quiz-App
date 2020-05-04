import * as c from './ActionTypes';

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const changeSurvey = (survey) => {
  const { title, instructions, question1, question2, question3, question4, question5, question6 } = survey;
  return {
    type: c.CHANGE_SURVEY,
    title: title,
    instructions: instructions,
    question1: question1,
    question2: question2,
    question3: question3,
    question4: question4,
    question5: question5,
    question6: question6
  }
};

export const unselectSurvey = () => ({
  type: c.UNSELECT_SURVEY
});