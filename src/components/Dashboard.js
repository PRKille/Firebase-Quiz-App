import React from 'react';
import PropTypes from 'prop-types';

function Dashboard(props){

  const { userResponses } = props;

  return (
    <React.Fragment>
      <p>A Dashboard</p>
      {Object.keys(userResponses).map((key) => {
        return (<div>
          <p>{key}</p>
          <p>{userResponses[key]}</p> 
        </div>)
      })}
    </React.Fragment>
  );

}

Dashboard.propTypes = {
  userResponses: PropTypes.object
}

export default Dashboard; 