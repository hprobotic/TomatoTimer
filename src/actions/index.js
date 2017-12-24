export const START_COUNTDOWN = 'START_COUNTDOWN';
export const STOP_COUNTDOWN  = 'STOP_COUNTDOWN';
export const RESET_COUNTDOWN = 'RESET_COUNTDOWN';

export function startCountdown(baseTime = 0) {
  console.log('starting countdown...');
  // startCountDown is an ActionCreator, it needs to return an action which is an object with a type property
  return {
    type: START_COUNTDOWN,
    baseTime: baseTime,
    now: new Date().getTime()
  }
}

export function stopCountdown() {
  console.log('stopped countdown...');
  // startCountDown is an ActionCreator, it needs to return an action which is an object with a type property
  return {
    type: STOP_COUNTDOWN,
    now: new Date().getTime()
  }
}

export function resetCountdown() {
  console.log('reset countdown...');
  // startCountDown is an ActionCreator, it needs to return an action which is an object with a type property
  return {
    type: RESET_COUNTDOWN,
    now: new Date().getTime()
  }
}