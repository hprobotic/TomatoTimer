import _ from 'lodash'
import fire from '../javascripts/firebase'

export const DEFAULT_USER = 'DEFAULT_USER'
export const START_COUNTDOWN = 'START_COUNTDOWN'
export const STOP_COUNTDOWN = 'STOP_COUNTDOWN'
export const RESET_COUNTDOWN = 'RESET_COUNTDOWN'
export const ON_TICK = 'ON_TICK'
export const SHORT_BREAK = 'SHORT_BREAK'
export const LONG_BREAK = 'LONG_BREAK'
export const DEFAULT_BREAK = 'DEFAULT_BREAK'
export const SAVE_SETTING = 'SAVE_SETTING'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_SUCCESS = 'LOGOUT'

export function saveSetting(pomodoro, shortbreak, longbreak) {
  localStorage.setItem('pomodoro', pomodoro * 60)
  localStorage.setItem('shortBreak', shortbreak * 60)
  localStorage.setItem('longBreak', longbreak * 60)
  return {
    type: SAVE_SETTING,
    seconds: localStorage.getItem('pomodoro')
  }
}

export function startCountdown() {
  return {
    type: START_COUNTDOWN,
    ticking: true
  }
}

export function stopCountdown() {
  console.log('stopped countdown...')
  return {
    type: STOP_COUNTDOWN,
    ticking: false
  }
}

export function resetCountdown() {
  console.log('reset countdown...')
  return {
    type: RESET_COUNTDOWN
  }
}

export function defaultBreak() {
  return {
    type: DEFAULT_BREAK
  }
}

export function shortBreak() {
  return {
    type: SHORT_BREAK
  }
}

export function longBreak() {
  return {
    type: LONG_BREAK
  }
}

export function signUp(email, password, pomodoro, shortBreak, longBreak) {
  console.log('Inside of function signup')
  return dispatch => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(obj => {
        console.log('inside function then')
        let database = fire.database()
        database.ref('users').pus1h({
          email: obj.email,
          settings: {
            pomodoro: pomodoro,
            shortBreak: shortBreak,
            longBreak: longBreak
          }
        })
        dispatch({
          type: SIGNUP_SUCCESS,
          user: {
            email: obj.email,
            settings: {
              pomodoro: pomodoro,
              shortBreak: shortBreak,
              longBreak: longBreak
            }
          }
        })
      })
      .catch(error => {
        console.log(`Error: ${error}`)
        dispatch({
          type: SIGNUP_FAILURE,
          message: error
        })
      })
  }
}

export function logIn(email, password) {
  console.log('Inside of function login')
  return dispatch => {
    fire
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(obj => {
        let database = fire.database()
        let user = database
          .ref('users')
          .orderByChild('email')
          .equalTo(obj.user.email)
          .limitToFirst(1)
          .once('value', snapshot => {
            snapshot
          })
          .then(
            snapshot => {
              dispatch({
                type: LOGIN_SUCCESS,
                user: _.first(_.values(snapshot.val()))
              })
            },
            error => console.log(error)
          )
      })
      .catch(error => {
        console.log(`Error: ${error}`)
        dispatch({
          type: LOGIN_FAILURE,
          message: error
        })
      })
  }
}

export function logOut() {}
