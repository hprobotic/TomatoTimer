import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Modal, Button, Icon, Header, Input, Grid } from 'semantic-ui-react'
import { saveSetting, signUp, logIn } from '../../actions/index'
import Authentication from '../Authentication/index'
import './Setting.css'

class Setting extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.pomodoro)
    // this.state = {
    //   pomodoro: this.props.pomodoro,
    //   shortbreak: this.props.shortBreak,
    //   longbreak: this.props.shortBreak
    // }

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
    const logout = this.props.login ? (
      <Button
        color="gray"
        onClick={() => {
          alert('ahihi...')
        }}
      >
        Logout
      </Button>
    ) : null
    return (
      <div>
        <Input
          value={this.props.pomodoro}
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
          value={this.props.shortBreak}
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
          value={this.props.longBreak}
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
        <Authentication
          logIn={this.props.logIn}
          signUp={this.props.signUp}
          pomodoro={this.props.pomodoro}
          shortBreak={this.props.shortBreak}
          longBreak={this.props.longBreak}
        />
        {logout}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
    pomodoro: state.user.user.settings.pomodoro,
    shortBreak: state.user.user.settings.shortBreak,
    longBreak: state.user.user.settings.longBreak
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      saveSetting: saveSetting,
      signUp: signUp,
      logIn: logIn
    },
    dispatch
  )
}

// Promote MainButtons from a component to a container - it needs to know about
// this new dispatch method, countDown. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(Setting)
