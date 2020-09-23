import { combineReducers } from 'redux';
import taskReducer from '../reducers/task';

const rootReducer = combineReducers({
  task: taskReducer,
});

export default rootReducer;
