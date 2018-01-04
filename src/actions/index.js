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
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'
export const SYNCING_DATA_SUCCESS = 'SYNCING_DATA_SUCCESS'
export const SYNCING_DATA_FAILURE = 'SYNCING_DATA_FAILURE'
export const SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE'

export function saveSetting(pomodoro, shortbreak, longbreak) {
  localStorage.setItem('pomodoro', pomodoro)
  localStorage.setItem('shortBreak', shortbreak)
  localStorage.setItem('longBreak', longbreak)
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
        database.ref('users').push({
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
        dispatch({
          type: LOGIN_SUCCESS,
          email: obj.user.email
        })
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

export function logOut() {
  console.log('Inside of function logout')
  return dispatch => {
    fire
      .auth()
      .signOut()
      .then(function() {
        dispatch({
          type: LOGOUT_SUCCESS
        })
      })
      .catch(function(error) {
        console.log(error)
        dispatch({
          type: LOGOUT_FAILURE
        })
      })
  }
}

export function syncingData(email) {
  console.log('Inside of function syncing data', email)
  return (dispatch, getState) => {
    let database = fire.database()
    let user = database
      .ref('users')
      .orderByChild('email')
      .equalTo(email)
      .limitToFirst(1)
      .once('value', snapshot => {
        snapshot
      })
      .then(
        snapshot => {
          let user = _.first(_.values(snapshot.val()))
          let settings = user.settings
          getState().pomodoro.seconds = settings.pomodoro * 60
          localStorage.setItem('pomodoro', settings.pomodoro)
          localStorage.setItem('shortBreak', settings.shortBreak)
          localStorage.setItem('longBreak', settings.longBreak)
          dispatch({
            type: SYNCING_DATA_SUCCESS,
            user: user
          })
        },
        error => console.log(error)
      )
  }
}

export const toggleSidebar = menuItem => {
  console.log(menuItem)
  return {
    type: SIDEBAR_TOGGLE,
    payload: {
      menuItem
    }
  }
}
