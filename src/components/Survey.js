import React from 'react';
import PropTypes from 'prop-types';

function Survey(props) {
  return (
    <div onClick={()=> props.whenSurveyClicked(props.id)}>
      <h3>{props.title}</h3>
    </div>
  );
}

Survey.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  key: PropTypes.string,
  whenSurveyClicked: PropTypes.func
}

export default Survey;