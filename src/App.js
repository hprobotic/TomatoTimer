import React, { Component } from 'react'
import {
  Timer,
  Quotes,
  KeyboardShortcuts,
  Sidebar,
  Chart,
  Setting
} from './components'
import './App.css'
import { Grid, Image } from 'semantic-ui-react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
  }

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
            <Sidebar>
              <Chart name="Chart" visibility="hidden" />
              <Setting name="Setting" visibility="hidden" />
            </Sidebar>
          </div>
          <div className="item item-4">
            <Timer />
          </div>
          <div className="item item-7">
            <Quotes />
            <KeyboardShortcuts />
          </div>
        </div>
      </div>
    )
  }
}

export default App
