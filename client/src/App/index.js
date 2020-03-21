import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import LandingPage from './Landing-Page'
class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path={'/'} render={(props) => <LandingPage {...props}/>}/>
      </Switch>
    );
  }
}

export default App;
