import React from 'react';
import Survey from './Survey';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import PropTypes from 'prop-types';

function SurveyList(props) {
  useFirestoreConnect([
    { collection: 'surveys' }
  ]);

  const surveys = useSelector(state => state.firestore.ordered.surveys);

  if (isLoaded(surveys)) {
    return (
      <React.Fragment>
        {surveys.map((survey) => {
          return <Survey 
            whenSurveyClicked={props.onSurveySelection} 
            whenDeleteClicked={props.onDeleteClick} 
            whenEditClicked={props.onEditClick} 
            title={survey.title} 
            id={survey.id} 
            key={survey.id} />
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>loading...</h3>
      </React.Fragment>
    );
  }
}

SurveyList.propTypes = {
  onSurveySelection: PropTypes.func,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func
}

export default SurveyList;