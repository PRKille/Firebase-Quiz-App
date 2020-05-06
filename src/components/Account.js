import React from "react";
import firebase from 'firebase/app';
import Dashboard from './Dashboard';
import { Link } from "react-router-dom";
import { isLoaded, withFirestore } from 'react-redux-firebase';

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
  let db = firebase.firestore();

  // populate an array of survey IDs created by current user
  let surveyRefs = db.collection("surveys").where("creator", "==", userID);
  const userSurveyResponses = surveyRefs.get().then(function(querySnapshot) {
      if (isLoaded(querySnapshot)) {
        let responses = {};
        querySnapshot.forEach(function(doc) {
          const allResponses = db.collection('surveys').doc('survey_responses').collection('responses').where("surveyId", "==", doc.id);
          allResponses.get().then(function(allFoundResponses) {
            let allUserResponsesArray = [];
            allFoundResponses.forEach(function(response) {
              const currentResponse = {
                id: response.id,
                surveyId: response.get('surveyId'),
                question1answer: response.get('question1answer'),
                question2answer: response.get('question2answer'),
                question3answer: response.get('question3answer'),
                question4answer: response.get('question4answer'),
                question5answer: response.get('question5answer'),
                question6answer: response.get('question6answer'),
              }
              allUserResponsesArray.push(currentResponse);
            });
            responses[doc.id] = allUserResponsesArray;
          });
        });
        return responses;
      };
    });

console.log(userSurveyResponses);

  if (user) {
    userControlView = 
      <React.Fragment>
        <h1>Dashboard</h1>
        <button onClick={()=> doSignOut}>Sign out</button>
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

export default withFirestore(Account);