import _ from 'lodash';
import Firebase from 'firebase';

export const DEFAULT_USER = 'DEFAULT_USER';
export const START_COUNTDOWN = 'START_COUNTDOWN';
export const STOP_COUNTDOWN = 'STOP_COUNTDOWN';
export const RESET_COUNTDOWN = 'RESET_COUNTDOWN';
export const ON_TICK = 'ON_TICK';
export const SHORT_BREAK = 'SHORT_BREAK';
export const LONG_BREAK = 'LONG_BREAK';
export const DEFAULT_BREAK = 'DEFAULT_BREAK';
export const SAVE_SETTING = 'SAVE_SETTING';
const Users = new Firebase('https://tomato-timer-29c5d.firebaseio.com');

export function onTick(currentTime) {
  return {
    type: ON_TICK,
    seconds: currentTime - 1
  }
}

export function getDefaultVal() {
  return dispatch => {
    Users.on('value', snapshot => {
      dispatch({
        type: DEFAULT_USER,
        payload: snapshot.val()
      });
    });
  };
}

export function saveSetting(pomodoro, shortbreak, longbreak) {
  alert('saving setting to local storage...');
  localStorage.setItem('pomodoro', pomodoro * 60);
  localStorage.setItem('shortbreak', shortbreak * 60);
  localStorage.setItem('longbreak', longbreak * 60);
  return {
    type: SAVE_SETTING,
    pomodoro: localStorage.getItem('pomodoro'),
    shortbreak: localStorage.getItem('shortbreak'),
    longbreak: localStorage.getItem('longbreak')
  };
}

export function startCountdown() {
  return {
    type: START_COUNTDOWN,
    ticking: true
  }
}

export function stopCountdown() {
  console.log('stopped countdown...')
  return {
    type: STOP_COUNTDOWN,
    ticking: false
  }
}

export function resetCountdown() {
  console.log('reset countdown...')
  return {
    type: RESET_COUNTDOWN
  }
}

export function defaultBreak() {
  return {
    type: DEFAULT_BREAK
  }
}

export function shortBreak() {
  return {
    type: SHORT_BREAK
  }
}

export function longBreak() {
  return {
    type: LONG_BREAK
  }
}
