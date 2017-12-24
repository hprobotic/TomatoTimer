import { START_COUNTDOWN, STOP_COUNTDOWN, RESET_COUNTDOWN } from '../actions/index';
const initialState = {
  startedAt: 25,
  stoppedAt: undefined,
  baseTime: undefined
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RESET_COUNTDOWN:
      return {
        ...state,
        baseTime: 0,
        startedAt: state.startedAt ? action.now : undefined,
        stoppedAt: state.stoppedAt ? action.now : undefined
      };
    case START_COUNTDOWN:
      return {
        ...state,
        baseTime: action.baseTime,
        startedAt: action.now,
        stoppedAt: undefined
      };
    case STOP_COUNTDOWN:
      return {
        ...state,
        stoppedAt: action.now
      }
    default:
      return state;
  }
}