import React, { Component } from 'react'
import { Popup, Button, Header, Input, Image, Modal } from 'semantic-ui-react'
import fire from '../../javascripts/firebase'
import _ from 'lodash'

class Authentication extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      email: '',
      password: ''
    }
    this.signupFirebase = this.signupFirebase.bind(this)
    this.loginFirebase = this.loginFirebase.bind(this)
  }

  signupFirebase() {
    const { email, password } = this.state
    console.log('inside of signupFirebase')
    this.props.signUp(
      email,
      password,
      this.props.pomodoro,
      this.props.shortBreak,
      this.props.longBreak
    )
    this.close()
  }

  loginFirebase() {
    const { email, password } = this.state
    console.log('inside of loginFirebase')
    this.props.logIn(email, password)
    this.close()
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state
    return (
      <div>
        <Button color="green" onClick={this.show('blurring')}>
          Login
        </Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Setting Data Cloud</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Input
                value={this.state.email}
                onChange={event => {
                  this.setState({ email: event.target.value })
                }}
                id="user_email"
                type="emai"
                label="Email"
              />
              <Input
                value={this.state.password}
                onChange={event => {
                  this.setState({ password: event.target.value })
                }}
                id="user_password"
                type="password"
                min="1"
                label="Password"
              />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="blue"
              onClick={() => this.loginFirebase()}
              content="Login"
            />
            <Button
              color="green"
              content="Signup"
              onClick={() => this.signupFirebase()}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default Authentication
