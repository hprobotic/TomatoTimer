import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar';
import MainFeatures from '../components/MainFeatures';
import TimeCountDown from '../containers/TimeCountDown';
import MainButtons from '../containers/MainButtons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
        <MainFeatures />
        <br />
        <TimeCountDown />
        <br />
        <MainButtons />
      </div>
    );
  }
}

export default App;
