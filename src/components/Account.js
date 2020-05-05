import React from "react";
import firebase from 'firebase/app';
import Dashboard from './Dashboard';
import { Link } from "react-router-dom";

function Account(){  

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  const links = {
    marginLeft: '2%'
  }
  
  let user = firebase.auth().currentUser;
  let userID = user.uid;
  let userControlView = null;

  // populate an array of survey IDs created by current user
  let userSurveyIds = [];
  const surveys = firestore.collection("surveys").where("creator", "==", userID).get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      let surveyID = doc.id;
      userSurveyIds.push(surveyID);
    });
  });

  // populate an object with survey IDs as keys and, for each surveyID, an array of responses corresponding to that survey as the values.
  let responses = {};
  if (userSurveyIds.length > 0) {
    userSurveyIds.forEach(function(surveyId) {
      const allUserSurveyResponses = firestore.collection("responses").where("surveyId", "==", surveyId).get().then(function(querySnapshot) {
        let currentSurveyResponses = [];
        querySnapshot.forEach(function(doc) {
          let response = {
            id: doc.id,
            surveyId: doc.get("surveyId"),
            question1answer: doc.get("question1answer"),
            question2answer: doc.get("question2answer"),
            question3answer: doc.get("question3answer"),
            question4answer: doc.get("question4answer"),
            question5answer: doc.get("question5answer"),
            question6answer: doc.get("question6answer"),
          }
          currentSurveyResponses.push(response);
        });
        responses[surveyId] = currentSurveyResponses;
      });
    });
  }

  if (user) {
    userControlView = 
      <React.Fragment>
        <h1>Dashboard</h1>
        <button onClick={()=> doSignOut}>Sign out</button>
        {console.log(responses)}
        <Dashboard />
      </React.Fragment>
    } else {
    userControlView = 
      <React.Fragment>
        <Link to="/signin" style={links}>sign in</Link>
        <Link to="/signup" style={links}>make new account</Link>
      </React.Fragment>
  }
  
  return (
    <React.Fragment>
      {userControlView}
    </React.Fragment>
  );
}

export default Account;