import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function EditSurveyForm(props) {

  const firestore = useFirestore();

  function editSurveyInDatabase(event) {
    event.preventDefault();
    props.onEditSubmission();
    console.log(props.survey)
    const titleEdit = (event.target.title.value !== "") ? event.target.title.value : props.survey.title;
    const instructionsEdit = (event.target.instructions.value !== "") ? event.target.instructions.value : props.survey.instructions;
    const Q1 = (event.target.question1.value !== "") ? event.target.question1.value : props.survey.question1;
    const Q2 = (event.target.question2.value !== "") ? event.target.question2.value : props.survey.question2;
    const Q3 = (event.target.question3.value !== "") ? event.target.question3.value : props.survey.question3;
    const Q4 = (event.target.question4.value !== "") ? event.target.question4.value : props.survey.question4;
    const Q5 = (event.target.question5.value !== "") ? event.target.question5.value : props.survey.question5;
    const Q6 = (event.target.question6.value !== "") ? event.target.question6.value : props.survey.question6;
    
    const propertiesToUpdate = {
      title: titleEdit,
      instructions: instructionsEdit,
      question1: Q1,
      question2: Q2,
      question3: Q3,
      question4: Q4,
      question5: Q5,
      question6: Q6
    }
    return firestore.update({collection: 'surveys', doc: props.survey.id}, propertiesToUpdate);
  }
  
  return (
    <React.Fragment>
    <h3>Edit Survey</h3>
    <p>Note: Questions 1 through 5 will have answers on a scale of one to five. Question 6 will have an open text input field for a response.</p>
    <form onSubmit={editSurveyInDatabase}>
      <input
        type="text"
        name="title"
        placeholder={props.survey.title} />
      <textarea
        name="instructions"
        placeholder={props.survey.instructions} />
      <input 
        type="text"
        name="question1"
        placeholder={props.survey.question1} />
      <input 
        type="text"
        name="question2"
        placeholder={props.survey.question2} />
      <input 
        type="text"
        name="question3"
        placeholder={props.survey.question3} />
      <input 
        type="text"
        name="question4"
        placeholder={props.survey.question4} />
      <input 
        type="text"
        name="question5"
        placeholder={props.survey.question5} />
      <input
        type="text"
        name="question6"
        placeholder={props.survey.question6} />
      <button type="submit">save changes</button>
    </form>
    </React.Fragment>
  );
}

EditSurveyForm.propTypes = {
  survey: PropTypes.object,
  onEditSubmission: PropTypes.func
};

export default EditSurveyForm;