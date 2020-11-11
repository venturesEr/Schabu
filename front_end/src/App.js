import React, { Component } from 'react';
import { Switch, Route, Redirect, Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Login';
import history from './history';
import candidate from './Candidate';
import ExpiredEmailLink from './ExpiredEmailLink';
import Thank_you from './thank_you';
import Welcome from './Welcome';
import Job_table from './Job_table';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
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
