import {
  START_COUNTDOWN,
  STOP_COUNTDOWN,
  RESET_COUNTDOWN,
  ON_TICK,
  SHORT_BREAK,
  LONG_BREAK,
  DEFAULT_BREAK
} from '../actions';

const DEFAULT_BREAK_SECS = 1500;
const SHORT_BREAK_SECS = 300;
const LONG_BREAK_SECS = 600;

const initialState = {
  seconds: DEFAULT_BREAK_SECS,
  ticking: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ON_TICK:
      console.log('just went through case ON_TICK...');
      return {
        ...state,
        seconds: action.seconds
      };
    case (RESET_COUNTDOWN, DEFAULT_BREAK):
      console.log('just went through case RESET_COUNTDOWN...');
      return {
        ...initialState
      };
    case START_COUNTDOWN:
      console.log('just went through case START_COUNTDOWN...');
      return {
        ...state,
        ticking: action.ticking
      };
    case STOP_COUNTDOWN:
      console.log('just went through case STOP_COUNTDOWN...');
      return {
        ...state,
        ticking: action.ticking
      };
    case SHORT_BREAK:
      return {
        ...state,
        seconds: SHORT_BREAK_SECS
      };
    case LONG_BREAK:
      return {
        ...state,
        seconds: LONG_BREAK_SECS
      };
    default:
      return state;
  }
}
