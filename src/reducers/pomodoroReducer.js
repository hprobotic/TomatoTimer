import {
  RESET_COUNTDOWN,
  ON_TICK,
  SHORT_BREAK,
  LONG_BREAK,
  DEFAULT_BREAK,
  SAVE_SETTING,
  CHANGE_COUNTDOWN
} from '../actions'

const DEFAULT_BREAK_SECS = 1500
const SHORT_BREAK_SECS = 300
const LONG_BREAK_SECS = 600

const BREAK_TYPE = {
  pomodoro: 'pomodoro',
  shortBreak: 'shortBreak',
  longBreak: 'longBreak'
}

const initialState = {
  seconds: DEFAULT_BREAK_SECS,
  currentBreak: BREAK_TYPE.pomodoro
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
        currentBreak: BREAK_TYPE.shortBreak
      }
    case LONG_BREAK:
      return {
        ...state,
        currentBreak: BREAK_TYPE.longBreak
      }
    case CHANGE_COUNTDOWN:
      return {
        ...state,
        seconds: action.payload.newCount
      }
    default:
      return state
  }
}
