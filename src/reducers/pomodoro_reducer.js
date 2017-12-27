import { START_COUNTDOWN, STOP_COUNTDOWN, RESET_COUNTDOWN, ON_TICK } from '../actions';

const SECONDS = 1500

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
    default:
      return state;
  }
}
