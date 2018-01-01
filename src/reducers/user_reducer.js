import {
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SIGNUP_FAILURE
} from '../actions/index'

const initialState = {
  login: false,
  user: {
    email: '',
    settings: {
      pomodoro: localStorage.getItem('pomodoro') || 25,
      shortBreak: localStorage.getItem('shortBreak') || 5,
      longBreak: localStorage.getItem('longBreak') || 10
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      console.log('Sign up successfully')
      return {
        login: true,
        user: action.user
      }
    case LOGIN_SUCCESS:
      console.log('Log in successfully')
      console.log(action.user)
      return {
        login: true,
        user: action.user
      }
    default:
      return state
  }
}
