export const START_COUNTDOWN = 'START_COUNTDOWN';
export const STOP_COUNTDOWN  = 'STOP_COUNTDOWN';
export const RESET_COUNTDOWN = 'RESET_COUNTDOWN';
export const ON_TICK         = 'ON_TICK';

function leadingZero(n) {
  return n < 10 ? '0' + n : n;
}

export function onTick(currentTime) {
  console.log('time is ticking...');
  return {
    type: ON_TICK,
    seconds: currentTime - 1
  }
}

export function startCountdown() {
  console.log('starting countdown...');
  // startCountDown is an ActionCreator, it needs to return an action which is an object with a type property
  return {
    type: START_COUNTDOWN,
    ticking: true
  }
}

export function stopCountdown() {
  console.log('stopped countdown...');
  // stopCountDown is an ActionCreator, it needs to return an action which is an object with a type property
  return {
    type: STOP_COUNTDOWN,
    ticking: false
  }
}

export function resetCountdown() {
  console.log('reset countdown...');
  // ressetCountDown is an ActionCreator, it needs to return an action which is an object with a type property
  return {
    type: RESET_COUNTDOWN,
  }
}