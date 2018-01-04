import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Modal,
  Button,
  Icon,
  Header,
  Input,
  Grid,
  Form,
  Radio,
  Select,
  TextArea,
  Checkbox
} from 'semantic-ui-react'
import {
  saveSetting,
  signUp,
  logIn,
  logOut,
  syncingData,
  changeCountDown
} from '../../actions'
import Authentication from '../Authentication'
import './Setting.css'
import { isLoggedIn } from '../../utilts'
class Setting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formValue: {}
    }
  }

  handleSave = () => {
    const { saveSetting } = this.props
    saveSetting(this.state.formValue)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.settings !== this.props.settings) {
      this.props.changeCountDown(nextProps.settings[this.props.currentBreak])
    }
  }

  componentDidMount() {
    this.setState({
      formValue: this.props.settings
    })
  }

  handleChange = (e, { name, value }) => {
    this.setState({
      formValue: {
        ...this.state.formValue,
        [name]: parseInt(value, 10) || 0
      }
    })
  }

  render() {
    return (
      <div className="setting-form">
        <Form onSubmit={this.handleSave}>
          <Form.Group widths="equal">
            <Form.Field
              value={this.state.formValue.pomodoro}
              control={Input}
              type="number"
              min="1"
              max="60"
              step="1"
              label="Pomodoro"
              placeholder="25"
              name="pomodoro"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              value={this.state.formValue.shortBreak}
              control={Input}
              type="number"
              min="1"
              max="60"
              step="1"
              label="Short Break"
              name="shortBreak"
              placeholder="5"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              value={this.state.formValue.longBreak}
              control={Input}
              type="number"
              min="1"
              max="60"
              step="1"
              label="Long Break"
              name="longBreak"
              placeholder="10"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group inline className="notification-option">
            <label>Desktop Notification</label>
            <Checkbox slider onChange={this.handleChange} />
          </Form.Group>
          <Form.Field control={Button} color="green">
            Save settings
          </Form.Field>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentBreak: state.pomodoro.currentBreak,
    login: state.user.login,
    settings: state.user.user.settings
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      saveSetting: saveSetting,
      signUp: signUp,
      logIn: logIn,
      logOut: logOut,
      syncingData: syncingData,
      changeCountDown: newCount => changeCountDown(newCount)
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting)
