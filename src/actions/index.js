import * as c from './ActionTypes';

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const selectSurvey = (survey) => {
  const { id, title, instructions, question1, question2, question3, question4, question5, question6 } = survey;
  return {
    type: c.SELECT_SURVEY,
    id: id,
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

export const editSurvey = () => ({
  type: c.EDIT_SURVEY
});