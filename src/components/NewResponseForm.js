import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function NewResponseForm(props) {

  const firestore = useFirestore();

  function handleSurveyResponse(event) {
    event.preventDefault();
    props.onRespondingToSurvey();
    return firestore.collection('responses').add(
      {
        surveyId: props.survey.id,
        question1answer: parseInt(event.target.question1answer.value),
        question2answer: parseInt(event.target.question2answer.value),
        question3answer: parseInt(event.target.question3answer.value),
        question4answer: parseInt(event.target.question4answer.value),
        question5answer: parseInt(event.target.question5answer.value),
        question6answer: event.target.question6answer.value
      }
    );
  }

  const isAllowedToEdit = (props.loggedInUser) ? <React.Fragment><button onClick={()=> props.onEditingSurvey(props.survey.id)}>edit survey</button><button onClick={()=> props.onDeleteClick(props.survey.id)}>delete survey</button></React.Fragment> : <p>You are only allowed to view and take surveys when not signed in.</p>

  return (
    <React.Fragment>
      {isAllowedToEdit}
      <form onSubmit={handleSurveyResponse}>
        <h1>{props.survey.title}</h1>
        <p>{props.survey.instructions}</p>
        <h4>{props.survey.question1}</h4>
        <div className="radio">
            <label>
              <input name="question1answer" type="radio" value="1" />
              1
            </label>
        </div>
        <div className="radio">
          <label>
            <input name="question1answer" type="radio" value='2' />
            2
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="question1answer" type="radio" value='3' />
            3
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="question1answer" type="radio" value='4' />
            4
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="question1answer" type="radio" value="5" />
            5
          </label>
        </div>
        
        <h4>{props.survey.question2}</h4>
        <div className="radio">
            <label>
              <input name="question2answer" type="radio" value="1" />
              1
            </label>
        </div>
        <div className="radio">
          <label>
            <input name="question2answer" type="radio" value='2' />
            2
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="question2answer" type="radio" value='3' />
            3
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="question2answer" type="radio" value='4' />
            4
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="question2answer" type="radio" value="5" />
            5
          </label>
        </div>
        
        <h4>{props.survey.question3}</h4>
        <div className="radio">
            <label>
              <input name="question3answer" type="radio" value="1" />
              1
            </label>
        </div>
        <div className="radio">
          <label>
            <input name="question3answer" type="radio" value='2' />
            2
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="question3answer" type="radio" value='3' />
            3
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="question3answer" type="radio" value='4' />
            4
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="question3answer" type="radio" value="5" />
            5
          </label>
        </div>

        <h4>{props.survey.question4}</h4>
        <div className="radio">
            <label>
              <input name="question4answer" type="radio" value="1" />
              1
            </label>
        </div>
        <div className="radio">
          <label>
            <input name="question4answer" type="radio" value='2' />
            2
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="question4answer" type="radio" value='3' />
            3
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="question4answer" type="radio" value='4' />
            4
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="question4answer" type="radio" value="5" />
            5
          </label>
        </div>

        <h4>{props.survey.question5}</h4>
        <div className="radio">
            <label>
              <input name="question5answer" type="radio" value="1" />
              1
            </label>
        </div>
        <div className="radio">
          <label>
            <input name="question5answer" type="radio" value='2' />
            2
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="question5answer" type="radio" value='3' />
            3
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="question5answer" type="radio" value='4' />
            4
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="question5answer" type="radio" value="5" />
            5
          </label>
        </div>
        <h4>{props.survey.question6}</h4>
        <textarea name="question6answer"></textarea>
        <button type="submit">submit!</button>
      </form>
    </React.Fragment>
  );
}

NewResponseForm.propTypes = {
  survey: PropTypes.object,
  loggedInUser: PropTypes.bool,
  onRespondingToSurvey: PropTypes.func,
  onEditingSurvey: PropTypes.func,
  onDeleteClick: PropTypes.func
}

export default NewResponseForm;