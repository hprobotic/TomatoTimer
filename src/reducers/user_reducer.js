import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SYNCING_DATA_SUCCESS
} from '../actions'

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
      console.log('Log in successfully', action.email)
      return {
        ...state,
        login: true,
        user: {
          email: action.email,
          settings: {
            pomodoro: state.user.settings.pomodoro,
            shortBreak: state.user.settings.shortBreak,
            longBreak: state.user.settings.longBreak
          }
        }
      }
    case LOGOUT_SUCCESS:
      console.log('Log out successfully')
      return {
        ...state,
        login: false
      }
    case SYNCING_DATA_SUCCESS:
      console.log('Syncing data successfully', action.user)
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}
