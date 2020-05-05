import React from 'react';
import PropTypes from 'prop-types';

function Survey(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <button onClick={()=> props.whenSurveyClicked(props.id)}>take survey</button>
      <button onClick={()=> props.whenDeleteClicked(props.id)}>delete survey</button>
    </div>
  );
}

Survey.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  key: PropTypes.string,
  whenSurveyClicked: PropTypes.func,
  whenEditClicked: PropTypes.func,
  whenDeleteClicked: PropTypes.func
}

export default Survey;