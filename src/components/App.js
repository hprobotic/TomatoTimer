import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar';
import MainFeatures from '../components/MainFeatures';
import MainButtons from '../containers/MainButtons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
        <MainFeatures />
        <br />
        <br />
        <MainButtons />
      </div>
    );
  }
}

export default App;
