import { START_COUNTDOWN, STOP_COUNTDOWN, RESET_COUNTDOWN, ON_TICK, SHORT_BREAK, LONG_BREAK, SAVE_SETTING } from '../actions';

const SECONDS          = 1500
const SHORT_BREAK_SECS = 300
const LONG_BREAK_SECS  = 600

const initialState = {
  pomodoro: {
    seconds: SECONDS,
    ticking: false
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ON_TICK:
      console.log('just went through case ON_TICK...');
      return {
        pomodoro: {
          seconds: action.seconds
        }
      };
      case SAVE_SETTING:
      console.log('just went through case Save Setting...');
      return {
        pomodoro: {
          seconds: action.pomodoro
        }
      };
    case RESET_COUNTDOWN:
      console.log('just went through case RESET_COUNTDOWN...');
      return {
        ...initialState
      };
    case START_COUNTDOWN:
      console.log('just went through case START_COUNTDOWN...');
      return {
        pomodoro: {
          seconds: state.pomodoro.seconds,
          ticking: action.ticking
        }
      };
    case STOP_COUNTDOWN:
      console.log('just went through case STOP_COUNTDOWN...');
      return {
        pomodoro: {
          seconds: state.pomodoro.seconds,
          ticking: action.ticking
        }
      }
    case SHORT_BREAK:
      return {
        pomodoro: {
          seconds: SHORT_BREAK_SECS,
          ticking: false
        }
      }
    case LONG_BREAK:
      return {
        pomodoro: {
          seconds: LONG_BREAK_SECS,
          ticking: false
        }
      }
    default:
      return state;
  }
}
