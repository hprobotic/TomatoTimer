import { combineReducers } from 'redux'
import PomodoroReducer from './pomodoro_reducer'

// Here is how the Application's state is generated
const rootReducer = combineReducers({
  pomodoro: PomodoroReducer
})

export default rootReducer
