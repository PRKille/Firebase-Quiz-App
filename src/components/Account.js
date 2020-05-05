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

  const links = {
    marginLeft: '2%'
  }
  
  let user = firebase.auth().currentUser;
  let userControlView = null;
  if (user) {
    userControlView = 
      <React.Fragment>
        <h1>Sign Out</h1>
        <button onClick={doSignOut}>Sign out</button>
        <Link to="/dashboard">Dashboard</Link>
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