import { createStore } from 'redux';
import userReducer from './users/users.reducer';

const store = createStore(userReducer);

export default store;