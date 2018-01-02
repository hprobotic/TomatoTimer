import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Modal, Button, Icon, Header, Input, Grid } from 'semantic-ui-react'
import {
  saveSetting,
  signUp,
  logIn,
  logOut,
  syncingData
} from '../../actions/index'
import Authentication from '../Authentication/index'
import './Setting.css'

class Setting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pomodoro: localStorage.getItem('pomodoro') || 25,
      shortBreak: localStorage.getItem('shortBreak') || 5,
      longBreak: localStorage.getItem('longBreak') || 10
    }
    console.log(this.state.shortBreak)
    console.log(this.state.longBreak)

    this.handleSave = this.handleSave.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log('inside of receive props: ', nextProps)
    if (nextProps.email) {
      this.setState({
        pomodoro: nextProps.pomodoro,
        shortBreak: nextProps.shortBreak,
        longBreak: nextProps.longBreak
      })
    }
  }

  handleSave(pomodoro, shortBreak, longBreak, closeModal) {
    this.props.saveSetting(pomodoro, shortBreak, longBreak)
  }

  render() {
    const logout = this.props.login ? (
      <Grid.Row>
        <Button
          color="gray"
          onClick={() => {
            this.props.logOut()
          }}
        >
          Logout
        </Button>
      </Grid.Row>
    ) : null
    const syncingDataFromCloud = this.props.login ? (
      <Grid.Row>
        <Button
          color="blue"
          onClick={() => {
            this.props.syncingData(this.props.email)
          }}
        >
          Syncing Data From Cloud
        </Button>
      </Grid.Row>
    ) : null
    const authentication = !this.props.login ? (
      <Grid.Row>
        <Authentication
          logIn={this.props.logIn}
          signUp={this.props.signUp}
          pomodoro={this.props.pomodoro}
          shortBreak={this.props.shortBreak}
          longBreak={this.props.longBreak}
        />
      </Grid.Row>
    ) : null
    return (
      <div>
        <Grid centered>
          <Grid.Row>
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
          </Grid.Row>
          <Grid.Row>
            <Input
              value={this.state.shortBreak}
              onChange={event => {
                this.setState({ shortBreak: event.target.value })
              }}
              id="time_shortbreak"
              type="number"
              min="1"
              step="1"
              size="mini"
              label="Short Break"
            />
          </Grid.Row>
          <Grid.Row>
            <Input
              value={this.state.longBreak}
              onChange={event => {
                this.setState({ longBreak: event.target.value })
              }}
              id="time_longbreak"
              type="number"
              min="1"
              step="1"
              size="mini"
              label="Long Break"
            />
          </Grid.Row>
          <Button
            color="green"
            onClick={() => {
              this.handleSave(
                this.state.pomodoro,
                this.state.shortBreak,
                this.state.longBreak,
                this.props.close
              )
            }}
          >
            Save Setting
          </Button>
          {authentication}
          {syncingDataFromCloud}
          {logout}
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('current user state: ', state.user)
  return {
    login: state.user.login,
    pomodoro: state.user.user.settings.pomodoro,
    shortBreak: state.user.user.settings.shortBreak,
    longBreak: state.user.user.settings.longBreak,
    email: state.user.user.email
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      saveSetting: saveSetting,
      signUp: signUp,
      logIn: logIn,
      logOut: logOut,
      syncingData: syncingData
    },
    dispatch
  )
}

// Promote MainButtons from a component to a container - it needs to know about
// this new dispatch method, countDown. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(Setting)
