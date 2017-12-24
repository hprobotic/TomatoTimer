import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar';
import MainFeatures from './MainFeatures';
import TimeCountDown from './TimeCountDown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <br/>
        <MainFeatures />
        <br/>
        <TimeCountDown />
      </div>
    );
  }
}

export default App;
