import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const {title, instructions, question1, question2, question3, question4, question5, question6} = action;
  switch(action.type) {
    case c.SELECT_SURVEY:
      const newState = {
        title: title,
        instructions: instructions,
        question1: question1,
        question2: question2,
        question3: question3,
        question4: question4,
        question5: question5,
        question6: question6
      };
      return newState;
    case c.UNSELECT_SURVEY:
      return null;
    default:
      return state;
  }
};