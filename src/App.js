import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import MainFeatures from './components/MainFeatures';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <br/>
        <MainFeatures />
      </div>
    );
  }
}

export default App;
