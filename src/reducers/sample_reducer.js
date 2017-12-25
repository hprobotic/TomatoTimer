// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const {createStore, combineReducers} = Redux;
const {Provider, connect} = ReactRedux;
const { render } = ReactDOM;

/*
Helper functions
*/
function leadingZero(n) {
  return n < 10 ? '0' + n : n;
}

const getTimerDisplay = (timerInSeconds) => ({
  minutes: Math.floor(timerInSeconds / 60),
  seconds: leadingZero(timerInSeconds % 60)
});

function spawnNotification(theBody, theIcon = pomodoroIcon) {
  return new Notification('Pomodoro', {
    body: theBody,
    icon: theIcon
  });
}

/*
Reducers 🍅✨🍕
*/
const pomodoro = 25;
const TIMERS = {
  POMODORO: 'POMODORO',
  BREAK: 'BREAK'
}
const initialState = {
  settings: {
    [TIMERS.POMODORO]: pomodoro, // switch to "break" timer when pomodoro timer === 0
    [TIMERS.BREAK] : 5 // stop timers when "break" timer === 0
  },
  timer: {
    timer: pomodoro * 60, // in seconds
    display: {
      minutes: pomodoro,
      seconds: '00'
    },
    ticking: true,
    currentTimer: TIMERS.POMODORO,
    nextTimer: TIMERS.BREAK
  }
}

const settings = (
  state = initialState.settings,
  action
) => {
  switch (action.type) {
    case 'TIMER_INCREMENT':
      return {...state, [action.timerType]: state[action.timerType] + 1};
    case 'TIMER_DECREMENT':
      return {...state, [action.timerType]: state[action.timerType] - 1};
    case 'SET_TIMER':
      return {...state, [action.timerType]: action.value};
    default:
      return state;
  }
}


const timer = (
  state = initialState.timer,
  action
) => {
  let timer;
  switch (action.type) {
    case 'SET_TIMER':
      // editing the current timer?
      if (action.timerType === state.currentTimer) {
        timer = state.timer - (action.difference * 60); // * 60: in seconds
        if (timer < 0) timer = 0;
        return {...state, timer, display: getTimerDisplay(timer)};
      }
      return state;
    case 'TIMER_INCREMENT':
      if (action.timerType === state.currentTimer) {
        timer = state.timer + 60;
        return {...state, timer, display: getTimerDisplay(timer)}
      }
      return state;
    case 'TIMER_DECREMENT':
      if (action.timerType === state.currentTimer) {
        timer = state.timer - 60;
        if (timer < 0) timer = 0;
        return {...state, timer, display: getTimerDisplay(timer)}
      }
      return state;
    case 'TIMER_TICK':
      timer = state.timer - 1;
      if (timer < 0) {
        timer = action.settings[state.nextTimer] * 60
        return {
          ...state,
          currentTimer: state.nextTimer,
          nextTimer: state.currentTimer,
          timer,
          display: getTimerDisplay(timer)
        }
      }
      return {...state, timer, display: getTimerDisplay(timer)};
    case 'TIMER_START_STOP':
      return {...state, ticking: !state.ticking};
    case 'TIMER_RESET':
      return initialState.timer;
    default:
      return state;
  }
}

const reducers = combineReducers({
  settings,
  timer
});


const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 🎐 ACTION CREATORS
const onTick = (settings) => ({ type: 'TIMER_TICK', settings });

const onTimerIncrement = (timerType) => ({
  type: 'TIMER_INCREMENT',
  timerType
});

const onTimerDecrement = (timerType) => ({
  type: 'TIMER_DECREMENT',
  timerType
});

const onTimerChange = (value, timerType, difference) => ({
  type: 'SET_TIMER',
  value,
  timerType,
  difference
});

const onTimerStartStop = () => ({
  type: 'TIMER_START_STOP'
});

const onTimerReset = () => ({
  type: 'TIMER_RESET'
});

/*
Presentational components
*/
let TimerDisplay = ({ minutes, seconds, currentTimer }) =>
  <div className={`timer-container timer-container--${currentTimer}`}>
    <h1 className="timer">
      <span className="timer__mins">{minutes}</span>
      :
      <span className="timer__secs">{seconds}</span>
    </h1>
  </div>;
TimerDisplay = connect(state => ({
  minutes: state.timer.display.minutes,
  seconds: state.timer.display.seconds,
  currentTimer: state.timer.currentTimer.toLowerCase()
}))(TimerDisplay)

let TimeControl = ({ name, value, onTimerIncrement, onTimerDecrement, onTimerChange }) =>
  <div className="control col">
    <div className="control__label">
      {name} time
    </div>
    <div className="time flex-grid">
      <span
        className="time__control"
        onClick={() => onTimerDecrement(name, '-')}
      >
        -
      </span>
      <input
        type="number"
        name={name}
        className="time__input"
        value={value}
        min={0}
        onChange={(e) => onTimerChange(e.target.value, name, value - e.target.value)}
      />
      <span
        className="time__control"
        onClick={() => onTimerIncrement(name, '+')}
      >
        +
      </span>
    </div>
  </div>;
TimeControl = connect(
  (state, ownProps) => ({value: state.settings[ownProps.name]}),
  { onTimerIncrement, onTimerDecrement, onTimerChange })
(TimeControl);

let StartStop = ({ onTimerStartStop, ticking }) =>
  <div className="start-stop">
    <button
      className={
        'start-stop__button--' +
        (ticking ? 'stop' : 'start') +
        ' start-stop__button button'
      }
      onClick={() => onTimerStartStop()}
    >
      {ticking ? 'stop' : 'start'}
    </button>
  </div>;
StartStop = connect((state) => ({ticking: state.timer.ticking}), {onTimerStartStop})(StartStop)

let Reset = ({ onTimerReset }) =>
  <div className="reset">
    <button className="button-anchor" onClick={() => onTimerReset()}>
      reset
    </button>
  </div>;
Reset = connect(null, {onTimerReset})(Reset)

/**
 * Timer {class}
 * Dispatches an action every second while a timer is ticking
 * If permission is granted, spawns a notification once a timer ends
 */
class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Notification.requestPermission();

    this.timerID = setInterval(() => {
      const {ticking, onTick, settings} = this.props
      if (ticking) {
        onTick(settings);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentWillReceiveProps(nextProps) {
    const nextTimer = nextProps.currentTimer
    if (this.props.currentTimer !== nextTimer) {
      beep();
      spawnNotification('bla', pomodoroIcon)

      if (Notification.permission === 'granted') {
        spawnNotification(
          nextTimer === TIMERS.BREAK
            ? 'Take a break'
            : 'Get back to work'
        );
      }
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }
}
const TimerContainer = connect(
  state => ({
    currentTimer: state.timer.currentTimer,
    ticking: state.timer.ticking,
    settings: state.settings,
  }),
  { onTick })
(Timer);

const App = () =>
  <div className="wrapper">
    <TimerContainer />
    <TimerDisplay />
    <div className="controls-container">
      <StartStop />
      <Reset />
      <TimeControls />
    </div>
  </div>;

const TimeControls = () =>
  <div className="timer-settings flex-grid">
    <TimeControl name={TIMERS.BREAK} />
    <TimeControl name={TIMERS.POMODORO} />
  </div>;

//  🔲🔲🔲
// 🔲🔲🔲🔲 Containers

// 🌳 #root
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

