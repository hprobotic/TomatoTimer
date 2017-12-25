import { START_COUNTDOWN, STOP_COUNTDOWN, RESET_COUNTDOWN, ON_TICK } from '../actions/index';
<<<<<<< HEAD
const POMODORO = 25
=======
const POMODORO = 0.1
>>>>>>> 016f4247a7cbcb133864ab12106e4a30d0e77384

const initialState = {
  pomodoro: {
    display: {
      minutes: POMODORO,
      seconds: '00'
    },
    ticking: false
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ON_TICK:
      console.log('just went through case ON_TICK...');
      return {
        pomodoro: {
          display: {
            minutes: action.nextMinute,
            seconds: action.nextSecond
          }
        }
      };
    case RESET_COUNTDOWN:
      return {
        ...state
      };
    case START_COUNTDOWN:
      console.log('just went through case START_COUNTDOWN...');
      return {
        pomodoro: {
          display: {
            minutes: POMODORO,
            seconds: '00'
          },
          ticking: true
        }
      };
    case STOP_COUNTDOWN:
      return {
        ...state
      }
    default:
      return state;
  }
}
