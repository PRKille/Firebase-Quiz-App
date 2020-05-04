import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function NewSurveyForm(props) {

  const firestore = useFirestore();
  
  function addSurveyToFirestore(event) {
    event.preventDefault();
    props.onNewSurveySubmission();
    return firestore.collection('surveys').add(
      {
        title: event.target.title.value,
        instructions: event.target.instructions.value,
        question1: event.target.question1.value,
        question2: event.target.question2.value,
        question3: event.target.question3.value,
        question4: event.target.question4.value,
        question5: event.target.question5.value,
        question6: event.target.question6.value
      }
    );
  };

  return (
    <form onSubmit={addSurveyToFirestore}>
      <input
        type="text"
        name="title"
        placeholder="title of quiz" required />
      <textarea
        name="instructions"
        placeholder="enter any instructions or background about the quiz that a user should know" required />
      <input 
        type="text"
        name="question1"
        placeholder="on a scale of one to five, ..." required />
      <input 
        type="text"
        name="question2"
        placeholder="on a scale of one to five, ..." required />
      <input 
        type="text"
        name="question3"
        placeholder="on a scale of one to five, ..." required />
      <input 
        type="text"
        name="question4"
        placeholder="on a scale of one to five, ..." required />
      <input 
        type="text"
        name="question5"
        placeholder="on a scale of one to five, ..." required />
      <input
        type="text"
        name="question6"
        placeholder="write a question that requires a text response, such as requesting feedback." required />
      <button type="submit">create your survey!</button>
    </form>
  );
}

NewSurveyForm.propTypes = {
  onNewSurveySubmission: PropTypes.func
}

export default NewSurveyForm;