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
    console.log(this.props)
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
    fire
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(obj => {
        console.log(obj.user.refreshToken)
        let database = fire.database()
        console.log(
          database
            .ref('users')
            .orderByChild('email')
            .equalTo(obj.user.email)
            .limitToFirst(1)
            .on('child_added', snap => {
              console.log(snap.val())
            })
          // .equalTo(obj.user.email, 'email')
          // .then(result => console.log(result.val()))
        )
        // database.ref('users').push({
        //   email: obj.user.email,
        //   token: obj.user.refreshToken,
        //   settings: {
        //     pomodoro_in_seconds:
        //       parseInt(localStorage.getItem('pomodoro')) || 25 * 60,
        //     shortBreak_in_seconds:
        //       parseInt(localStorage.getItem('shortBreak')) || 5 * 60,
        //     longBreak_in_seconds:
        //       parseInt(localStorage.getItem('longBreak')) || 10 * 60
        //   }
        // })
      })
      .catch(error => {
        console.log(`Error: ${error}`)
      })
    this.close()
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    // fire.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     console.log(
    //       'Account has been created successfully or user is logged in'
    //     )
    //   } else {
    //     console.log('user has signed out or needs to login')
    //   }
    // })

    const { open, dimmer } = this.state

    return (
      <div>
        <Button color="green" onClick={this.show('blurring')}>
          Syncing Data to/from Cloud
        </Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Setting Data Cloud</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              {/* <Header>Pushing Your Setting Data to Use Everywhere</Header> */}
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
