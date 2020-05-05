import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const {id, title, instructions, question1, question2, question3, question4, question5, question6} = action;
  switch(action.type) {
    case c.SELECT_SURVEY:
      const newState = {
        id,
        title,
        instructions,
        question1,
        question2,
        question3,
        question4,
        question5,
        question6
      };
      return newState;
    case c.UNSELECT_SURVEY:
      return null;
    default:
      return state;
  }
};