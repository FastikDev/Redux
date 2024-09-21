import { createStore, combineReducers } from 'redux';
import counterReducer from './counter/counter.reducer';
import usersReducer from './users/users.reducer';

const reducer = combineReducers({
  users: usersReducer,
  counter: counterReducer,
});

const store = createStore(reducer);

export default store;
