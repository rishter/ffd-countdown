import React, { Component } from 'react';
import './App.css';
import Countdown from './Countdown'
import Puzzle from './Puzzle'
import Leaderboard from './Leaderboard'
import { Route, Switch, Redirect } from 'react-router'
import puzzles from './puzzles'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/hunt" render={(routerProps) => {
            return <Puzzle puzzle={puzzles.puzzle1} />
          }} />
          <Route path="/savannah" render={(routerProps) => {
            return <Leaderboard />
          }} />
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
