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
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function onTick(currentTime) {
  return {
    type: ON_TICK,
    seconds: currentTime - 1
  }
}

// export function getDefaultVal() {
//   return dispatch => {
//     init.on('value', snapshot => {
//       dispatch({
//         type: DEFAULT_USER,
//         payload: snapshot.val()
//       });
//     });
//   };
// }

export function saveSetting(pomodoro, shortbreak, longbreak) {
  localStorage.setItem('pomodoro', pomodoro * 60)
  localStorage.setItem('shortBreak', shortbreak * 60)
  localStorage.setItem('longBreak', longbreak * 60)
  return {
    type: SAVE_SETTING,
    seconds: localStorage.getItem('pomodoro')
    // shortbreak: localStorage.getItem('shortbreak'),
    // longbreak: localStorage.getItem('longbreak')
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
          info: {
            email: obj.email,
            token: obj.refreshToken
          },
          settings: {
            pomodoro: pomodoro,
            shortBreak: shortBreak,
            longBreak: longBreak
          }
        })
        dispatch({
          type: SIGNUP_SUCCESS,
          user: {
            info: {
              email: obj.email,
              token: obj.refreshToken
            },
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
  return {
    type: LOGIN,
    user: fire
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(obj => {
        console.log(obj)
      })
      .catch(error => {
        console.log(`Error: ${error}`)
      })
  }
}

export function logOut() {}
