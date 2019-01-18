import { INCREMENT_COUNTER } from './counter.constants';

export const startIncrementCount = () => dispatch => setInterval(() => dispatch({ type: INCREMENT_COUNTER }), 1000);