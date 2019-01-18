import { combineReducers } from 'redux';
import Counter from './counter/counter.reducer';

const rootReducer = combineReducers({ Counter });

export default rootReducer;
