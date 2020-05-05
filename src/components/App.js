import React from 'react';
import SurveyControl from './SurveyControl';
import NavBar from './NavBar';
import Account from './Account';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './../App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <SurveyControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;