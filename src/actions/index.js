export const START_COUNTDOWN = 'START_COUNTDOWN'

export function startCountdown() {
  console.log('starting countdown...');
  // startCountDown is an ActionCreator, it needs to return an action which is an object with a type property
  return {
    type: START_COUNTDOWN,
    payload: 'starting countdown...'
  }
}