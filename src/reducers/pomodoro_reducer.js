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
  seconds: DEFAULT_BREAK_SECS
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
      return initialState;
    case SHORT_BREAK:
      console.log('STATE: ', state);
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
