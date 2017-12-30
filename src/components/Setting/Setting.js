import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Modal, Button, Icon, Header, Input, Grid } from 'semantic-ui-react'
import { saveSetting } from '../../actions/index'
import Authentication from '../Authentication/index'
import './Setting.css'

class Setting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pomodoro: localStorage.getItem('pomodoro') / 60 || 25,
      shortbreak: localStorage.getItem('shortbreak') / 60 || 5,
      longbreak: localStorage.getItem('longbreak') / 60 || 10
    }

    this.handleSave = this.handleSave.bind(this)
  }

  handleSave(pomodoro, shortbreak, longbreak, closeModal) {
    console.log('clicked!!!!')
    this.props.saveSetting(pomodoro, shortbreak, longbreak)
  }

  // handleChange(event, type) {
  //   this.setState({
  //     type: event.target.value
  //   })
  // }

  render() {
    return (
      <div>
        <Input
          value={this.state.pomodoro}
          onChange={event => {
            this.setState({ pomodoro: event.target.value })
          }}
          id="time_pomodoro"
          type="number"
          min="1"
          step="1"
          size="mini"
          label="Pomodoro"
        />
        <Input
          value={this.state.shortbreak}
          onChange={event => {
            this.setState({ shortbreak: event.target.value })
          }}
          id="time_shortbreak"
          type="number"
          min="1"
          step="1"
          size="mini"
          label="Short Break"
        />
        <Input
          value={this.state.longbreak}
          onChange={event => {
            this.setState({ longbreak: event.target.value })
          }}
          id="time_longbreak"
          type="number"
          min="1"
          step="1"
          size="mini"
          label="Long Break"
        />
        <br />
        <Button
          color="green"
          onClick={() => {
            this.handleSave(
              this.state.pomodoro,
              this.state.shortbreak,
              this.state.longbreak,
              this.props.close
            )
          }}
        >
          Save Setting
        </Button>
        <Authentication />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  // Whenever countDown is called, the result should be passed to all of our
  // reducers
  return bindActionCreators(
    {
      saveSetting: saveSetting
    },
    dispatch
  )
}

// Promote MainButtons from a component to a container - it needs to know about
// this new dispatch method, countDown. Make it available as a prop.
export default connect(null, mapDispatchToProps)(Setting)
