import { INCREMENT_SECOND_COUNTER } from './secondCounter.constants';

const initialState = {
  secondCount: 10
};

const SecondCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_SECOND_COUNTER:
      return { ...state, secondCount: state.secondCount + 1 };
    default:
      return state;
  }
};

export default SecondCounterReducer;