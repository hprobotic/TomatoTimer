import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import {
  Timer,
  Quotes,
  KeyboardShortcuts,
  BreakTypes,
  Sidebar,
  Footer
} from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="random-bg" />
        <div className="grid-container">
          <div className="item item-1">
            <div className="logo">
              <span className="title">Tomato Timer</span>
              <span className="description">
                <span>100K+ </span> focus hours
              </span>
            </div>
          </div>
          <div className="item item-2">
            <Sidebar />
          </div>
          <div className="item item-3">3</div>
          <div className="item item-4">
            {/* <BreakTypes /> */}
            <Timer />
          </div>
          <div className="item item-5">5</div>
          <div className="item item-7">
            <Quotes />
            <KeyboardShortcuts />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
