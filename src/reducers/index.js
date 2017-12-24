import { combineReducers } from 'redux';
import PomodoroReducer from './pomodoro_reducer';

// Here is how the Application's state is generated
const rootReducer = combineReducers({
  time: PomodoroReducer
});

export default rootReducer;