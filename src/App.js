import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Timer, Quotes, KeyboardShortcuts, Sidebar } from './components'
import './App.css'
import { Grid, Image } from 'semantic-ui-react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { isSidebarShowing } = this.props
    return (
      <div className="App">
        <div className={isSidebarShowing ? `overlay active` : `overlay`} />
        <div className="random-bg" />
        <div className="grid-container">
          <div className="item item-1">
            <div className="logo">
              <span className="title">Tomato Timer</span>
              <span className="description">
                <span>100K+ </span>focus hours
              </span>
            </div>
          </div>
          <div className="item item-2">
            <Sidebar />
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

const mapStateToProps = state => ({
  isSidebarShowing: state.layout.sidebar.isShowing
})

export default connect(mapStateToProps, undefined)(App)
