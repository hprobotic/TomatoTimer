import { combinedReducers } from 'redux';
import PomodoroReducer from './pomodoro_reducer';

const rootReducer = combinedReducers({
  time: PomodoroReducer
});

export default rootReducer;