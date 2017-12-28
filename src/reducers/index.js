import { combineReducers } from 'redux';
import PomodoroReducer from './pomodoro_reducer';
import UserReducer from './user_reducer';

// Here is how the Application's state is generated
const rootReducer = combineReducers({
  pomodoro: PomodoroReducer,
  user: UserReducer
});

export default rootReducer;
