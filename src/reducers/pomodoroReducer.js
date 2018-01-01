import {
  RESET_COUNTDOWN,
  ON_TICK,
  SHORT_BREAK,
  LONG_BREAK,
  DEFAULT_BREAK,
  SAVE_SETTING
} from '../actions'

const DEFAULT_BREAK_SECS = localStorage.getItem('pomodoro') || 1500
const SHORT_BREAK_SECS = 300
const LONG_BREAK_SECS = 600

const initialState = {
  seconds: DEFAULT_BREAK_SECS
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ON_TICK:
      return {
        ...state,
        seconds: action.seconds
      }
    case (RESET_COUNTDOWN, DEFAULT_BREAK):
      return initialState
    case SHORT_BREAK:
      return {
        ...state,
        seconds: localStorage.getItem('shortBreak') || SHORT_BREAK_SECS
      }
    case LONG_BREAK:
      return {
        ...state,
        seconds: localStorage.getItem('longBreak') || LONG_BREAK_SECS
      }
    case SAVE_SETTING:
      return {
        ...state,
        seconds: action.seconds
      }
    default:
      console.log('pomodoro reducer: ')
      console.log(state)
      return state
  }
}
