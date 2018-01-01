import { SIGNUP_SUCCESS, LOGIN, LOGOUT, SIGNUP_FAILURE } from '../actions/index'

const initialState = {
  login: false,
  user: {
    info: {
      email: '',
      token: ''
    },
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
        user: action.user,
        login: true
      }
    default:
      console.log('default state from: ')
      console.log(state)
      return state
  }
}
