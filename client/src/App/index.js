import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import LandingPage from './Landing-Page';
import './index.css';
import SetupEvent from "./Setup-Event-Page";
import JoinTable from "./Join-Table-Page";

class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path={'/'} render={(props) => <LandingPage {...props}/>}/>
          <Route exact path={'/setup-event'} render={(props) => <SetupEvent {...props}/>}/>
          <Route exact path={'/join-table'} render={(props) => <JoinTable {...props}/>}/>
      </Switch>
    );
  }
}

export default App;
