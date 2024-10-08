import { createStore } from 'redux';

export const increment = () => {
  return {
    type: 'COUNTER/INCREMENT',
  };
};

export const decrement = () => {
  return {
    type: 'COUNTER/DECREMENT',
  };
};
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'COUNTER/INCREMENT':
      return state + 1;
    case 'COUNTER/DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(counterReducer);
