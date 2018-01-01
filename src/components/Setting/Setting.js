import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Modal, Button, Icon, Header, Input, Grid } from 'semantic-ui-react'
import { saveSetting, signUp, logIn, logOut } from '../../actions/index'
import Authentication from '../Authentication/index'
import './Setting.css'

class Setting extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.pomodoro)
    this.state = {
      pomodoro: this.props.pomodoro,
      shortBreak: this.props.shortBreak || 5,
      longBreak: this.props.longBreak || 10
    }

    this.handleSave = this.handleSave.bind(this)
  }

  componentDidUpdate() {
    let self = this
    console.log('pomodoro props value: ', this.props.pomodoro)
    console.log('pomodoro state value: ', this.state.pomodoro)
    function needToRerender() {
      return (
        self.state.pomodoro !== self.props.pomodoro ||
        self.state.shortBreak !== self.props.shortBreak ||
        self.state.longBreak !== self.props.longBreak
      )
    }
    if (needToRerender()) {
      this.setState({
        pomodoro: this.props.pomodoro,
        shortBreak: this.props.shortBreak,
        longBreak: this.props.longBreak
      })
    }
  }

  handleSave(pomodoro, shortbreak, longbreak, closeModal) {
    console.log('clicked!!!!')
    this.props.saveSetting(pomodoro, shortbreak, longbreak)
  }

  render() {
    const logout = this.props.login ? (
      <Button
        color="gray"
        onClick={() => {
          this.props.logOut()
        }}
      >
        Logout
      </Button>
    ) : null
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
          value={this.state.shortBreak}
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
          value={this.state.longBreak}
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
    login: state.user.login,
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
      logIn: logIn,
      logOut: logOut
    },
    dispatch
  )
}

// Promote MainButtons from a component to a container - it needs to know about
// this new dispatch method, countDown. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(Setting)
