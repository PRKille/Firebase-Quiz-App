import React from 'react';
import PropTypes from 'prop-types';

function Dashboard(props){

  const { userResponses, userSurveys } = props;

  return (
    <React.Fragment>
      <p>A Dashboard</p>
      {console.log(userResponses)}
      {console.log(userSurveys)}
    </React.Fragment>
  );
}

Dashboard.propTypes = {
  userResponses: PropTypes.array,
  userSurveys: PropTypes.array
}

export default Dashboard;