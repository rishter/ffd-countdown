import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Countdown from './Countdown'
import Puzzle from './Puzzle'
import { Route, Switch, Redirect } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/*<Route path="/hunt" render={(routerProps) => {
            return <Puzzle text={"whatever dude"} />
          }} />*/}
          <Route path="/" render={(routerProps) => {
            return <Countdown goal={new Date(2018, 3, 21, 9)} />
          }} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
