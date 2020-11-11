import React, { Component } from 'react';
import { Switch, Route, Redirect, Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "./css/Ultil.css";
import Login from './pages/Login';
import history from './history';
import candidate from './pages/Candidate';
import ExpiredEmailLink from './ExpiredEmailLink';
import Thank_you from './pages/thank_you';
import Welcome from './pages/Welcome';
import LandingPage from './pages/LandingPage';
import Job_table from './pages/Job_table';
import JobListing from './pages/JobListing';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/job-listing" component={JobListing}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/candidate" component={candidate} />
            <Route exact path="/invalidlink" component={ExpiredEmailLink} />
            <Route exact path="/thankyou" component={Thank_you} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/jobtable" component={Job_table} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
