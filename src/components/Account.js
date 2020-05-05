import React from "react";
import firebase from 'firebase/app';
import { Link } from "react-router-dom";

function Account(){  

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  
  let user = firebase.auth().currentUser;
  let userControlView = null;
  if (user) {
    userControlView = 
      <React.Fragment>
        <h1>Sign Out</h1>
        <button onClick={doSignOut}>Sign out</button>
      </React.Fragment>
    } else {
    userControlView = 
      <React.Fragment>
        <Link to="/signin">sign in</Link>
        <Link to="/signup">make new account</Link>
      </React.Fragment>
  }
  
  return (
    <React.Fragment>
      {userControlView}
    </React.Fragment>
  );
}

export default Account;