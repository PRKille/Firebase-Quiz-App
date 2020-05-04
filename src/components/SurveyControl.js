import React from 'react';
import NewSurveyForm from './NewSurveyForm';
import SurveyList from './SurveyList';
import SurveyDetail from './SurveyDetail';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';

function SurveyControl(props) {
  const { dispatch } = props;

  // function handleSurveyResponse 

  // function handleSurveyCreation

  // function handleSurveySelection

  let currentView = null;
  let buttonText = null;
  if(this.state.selectedSurvey != null) {
    currentView = <SurveyDetail 
      survey={props.selectedSurvey}
      onRespondingToSurvey={handleSurveyResponse} />
    buttonText = "return to survey list";
  } else if (props.formVisible) {
    currentView = <NewSurveyForm onNewSurveySubmission={handleSurveyCreation} />
    buttonText = "return to survey list";
  } else {
    currentView = <SurveyList
      // surveys={} firestore
      onSurveySelection={handleSurveySelection} />
    buttonText = "create new survey";
  }
  return (
    <React.Fragment>
      <button>{buttonText}</button>
      {currentView}
    </React.Fragment>
  );
}

SurveyList.propTypes = {
  formVisible: PropTypes.bool,
  selectedSurvey: PropTypes.object
}

const mapStateToProps = state => {
  return {
    selectedSurvey: state.selectedSurvey,
    formVisible: state.formVisible
  }
}

SurveyControl = connect(mapStateToProps)(SurveyControl);

export default SurveyControl;