import { INCREMENT_SECOND_COUNTER } from './secondCounter.constants';

export const startIncrementSecondCount = () => dispatch => setInterval(() => dispatch({ type: INCREMENT_SECOND_COUNTER }), 1000);