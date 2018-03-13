import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Countdown from './Countdown'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Countdown goal={new Date(2018, 3, 21, 9)} />
      </div>
    );
  }
}

export default App;
