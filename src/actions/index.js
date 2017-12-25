export const START_COUNTDOWN = 'START_COUNTDOWN';
export const STOP_COUNTDOWN  = 'STOP_COUNTDOWN';
export const RESET_COUNTDOWN = 'RESET_COUNTDOWN';
export const ON_TICK = 'ON_TICK';


function leadingZero(n) {
  return n < 10 ? '0' + n : n;
}


export function onTick(currentMinute) {
  console.log('time is ticking...');
  return {
    type: ON_TICK,
    nextMinute: (currentMinute * 60 - 1) / 60,
    nextSecond: leadingZero(Math.floor((currentMinute * 60 - 1) % 60))
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