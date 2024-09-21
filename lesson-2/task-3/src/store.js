import { createStore } from 'redux';
import usersReduser from './users.reducer';

const store = createStore(usersReduser);

export default store;
