const initialState = {
  user: {
    info: {
      email: 'hprobotic@gmail.com',
      token: 'hello'
    },
    focusData: {
      count: 10,
      hours: 100
    },
    settings: {
      pomodoro: 25,
      shortBreak: 5,
      longBreak: 10
    }
  }
};

export default function(state = initialState, action) {
  return {
    state
  };
}
