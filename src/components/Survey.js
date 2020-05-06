import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function Survey(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <Button variant="outline-info" onClick={()=> props.whenSurveyClicked(props.id)}>take survey</Button>
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