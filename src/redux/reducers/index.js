import { combineReducers } from 'redux';
import Counter from '../counter/counter.reducer';
import SecondCounter from '../secondCounter/secondCounter.reducer';

const index = combineReducers({ Counter, SecondCounter });

export default index;
