import { combineReducers } from 'redux';
import Counter from './counter/counter.reducer';
import SecondCounter from './secondCounter/secondCounter.reducer';

const rootReducer = combineReducers({ Counter, SecondCounter });

export default rootReducer;
