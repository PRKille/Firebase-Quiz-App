import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function SurveyDetail(props) {

  function handleSurveyResponse(event) {
    event.preventDefault();
    props.onRespondingToSurvey();
    return firestore.collection('responses').add(
      {
        surveyId: props.id, // double check this
        question1answer: parseInt(event.target.question1answer.value),
        question2answer: parseInt(event.target.question2answer.value),
        question3answer: parseInt(event.target.question3answer.value),
        question4answer: parseInt(event.target.question4answer.value),
        question5answer: parseInt(event.target.question5answer.value),
        question6answer: event.target.question6answer.value
      }
    );
  }

  return (
    <form >
      <h1>{props.title}</h1>
      <p>{props.instructions}</p>
      <h4>{props.question1}</h4>
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
      
      <h4>{props.question2}</h4>
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
      
      <h4>{props.question3}</h4>
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

      <h4>{props.question4}</h4>
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

      <h4>{props.question5}</h4>
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
      <h4>{props.question6}</h4>
      <textarea name="question6answer"></textarea>
      <button>submit!</button>
    </form>
  );
}

Survey.propTypes = {
  title: PropTypes.string,
  instructions: PropTypes.string,
  question1: PropTypes.string,
  question2: PropTypes.string,
  question3: PropTypes.string,
  question4: PropTypes.string,
  question5: PropTypes.string,
  question6: PropTypes.string,
  onRespondingToSurvey: PropTypes.func
}

export default SurveyDetail;