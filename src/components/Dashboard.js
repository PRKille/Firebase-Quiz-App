import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function Dashboard(props){

  const { userResponses, userSurveys } = props;
  const [currentlyViewedSurveyResponses, changeResponses] = useState(null);

  const handleSurveyDashboardClick = (id) => {
    console.log("click breached!");
    let relevantResponses = userResponses.filter(surveyResponses => surveyResponses.surveyId === id);
    if (relevantResponses.length > 0) {
      let totalResponses = relevantResponses.length;
      let qOneTotal = 0;
      let qTwoTotal = 0;
      let qThreeTotal = 0;
      let qFourTotal = 0;
      let qFiveTotal = 0;
      let qSixList = [];

      for(let i = 0; i < totalResponses; i++){
        let obj = relevantResponses[i];
        qOneTotal += obj.question1answer; 
        qTwoTotal += obj.question2answer;
        qThreeTotal += obj.question3answer;
        qFourTotal += obj.question4answer;
        qFiveTotal += obj.question5answer;
        qSixList.push(obj.question6answer)
      };
      let qOneAvg = qOneTotal / totalResponses;
      let qTwoAvg = qTwoTotal / totalResponses;
      let qThreeAvg = qThreeTotal / totalResponses;
      let qFourAvg = qFourTotal / totalResponses;
      let qFiveAvg = qFiveTotal / totalResponses;

      console.log("total responses "+ totalResponses);
      console.log("q1 total " + qOneTotal);
      console.log("q1 avg " + qOneAvg);

      changeResponses(
        <React.Fragment>
          <h1>RESPONSES TO THIS SURVEY</h1>
          <p>Question One Average: {qOneAvg}</p>
          <p>Question Two Average: {qTwoAvg}</p>
          <p>Question Three Average: {qThreeAvg}</p>
          <p>Question Four Average: {qFourAvg}</p>
          <p>Question Five Average: {qFiveAvg}</p>
          <ul>Question Six Responses: {qSixList.map((answer, index) => { return <li key={index}>{answer}</li> })}</ul>
        </React.Fragment>
      );
    } else {
      changeResponses(
        <React.Fragment>
          <h4>There are no survey responses yet for this survey.</h4>
        </React.Fragment>
      );
    }
  }

  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
  }
  const buttonStyles = {
    margin: '1%',
    width: '50%'
  }

  let userDashboard;
  if (userSurveys.length > 0 && userSurveys[0] !== "Message:") {
    userDashboard = (
      <React.Fragment>
        <h1>YOUR SURVEYS</h1>
        <div style={listStyle}>{userSurveys.map((survey) => { 
      return <Button style={buttonStyles} key={survey.id} variant="outline-dark" onClick={() => handleSurveyDashboardClick(survey.id)}>{survey.title}</Button>
      })}</div>
      </React.Fragment>
    );
  } else if (userSurveys.length === 1 && userSurveys[0] === "Message:") {
    userDashboard = (
    <React.Fragment>
      <p>{userSurveys[0]}</p>
      <p>{userResponses[0]}</p>
      </React.Fragment>
    );
  } else {
    userDashboard = (
      <React.Fragment>
        <p>Woops! There was an error loading this page. This is probably not your fault.</p>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <p>A Dashboard</p>
      {userDashboard}
      {currentlyViewedSurveyResponses}
    </React.Fragment>
  );
}

Dashboard.propTypes = {
  userResponses: PropTypes.array,
  userSurveys: PropTypes.array,
}

export default Dashboard;