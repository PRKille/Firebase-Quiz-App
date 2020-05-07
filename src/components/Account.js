import React from "react";
import firebase from 'firebase/app';
import Dashboard from './Dashboard';
import { Link } from "react-router-dom";
import { isLoaded, withFirestore } from 'react-redux-firebase';
import { Button } from 'react-bootstrap';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyIds: [],
      dbResponses: [],
      hasRun: false
    }
  }

  doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  render() {
    const links = {
      marginLeft: '2%'
    }

    let user = firebase.auth().currentUser;
    let userControlView = null;
    
    if (user) {
      let userID = user.uid;
      let db = firebase.firestore();
      
      const surveyRefs = async () => {
        let surveys = db.collection("surveys").where("creator", "==", userID);
        let userSurveyIds = await allUserSurveyIds(surveys);
        let userResponses = await userSurveyResponses(surveys);
        this.setState({surveyIds: userSurveyIds, dbResponses: userResponses, hasRun: true});
      }

      const allUserSurveyIds = async (surveys) => {
        let res = await surveys.get().then(function(querySnapshot) {
          if (isLoaded(querySnapshot)) {
            let currentUserSurveyIds = [];
            querySnapshot.forEach(function(doc) {
              const survey = {
                id: doc.id,
                title: doc.get("title"),
                key: doc.id
              }
              currentUserSurveyIds.push(survey);
            });
            return currentUserSurveyIds;
          }
        });
        return res;
      }
      
      const userSurveyResponses = async (surveys) => {
        let res = await surveys.get().then(function(querySnapshot) {
        if (isLoaded(querySnapshot)) {
          let responses = [];
            querySnapshot.forEach(function(doc) {
              const allResponses = db.collection('surveys').doc('survey_responses').collection('responses').where("surveyId", "==", doc.id);
              allResponses.get().then(function(allFoundResponses) {
                allFoundResponses.forEach(function(response) {
                  const currentResponse = {
                    id: response.id,
                    key: response.id,
                    surveyId: response.get('surveyId'),
                    question1answer: response.get('question1answer'),
                    question2answer: response.get('question2answer'),
                    question3answer: response.get('question3answer'),
                    question4answer: response.get('question4answer'),
                    question5answer: response.get('question5answer'),
                    question6answer: response.get('question6answer'),
                  }
                  responses.push(currentResponse);
                });
              });
            });        
            return responses;
          };
        });
        return res
      };

      let actualResponses;
      let ids;
      if (this.state.hasRun === false) {
        ids = ["Message:"]
        actualResponses = ["Loading..."];
        surveyRefs();
      } else {
        ids = this.state.surveyIds;
        actualResponses = this.state.dbResponses;
      }

      userControlView = 
      <React.Fragment>
        <h1>Dashboard</h1>
        <Button variant="outline-info" onClick={()=> this.doSignOut}>Sign out</Button>
        <Dashboard 
          userSurveys={ids}
          userResponses={actualResponses}/>
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
}

export default withFirestore(Account);