import store from './store';
import { addUser, deleteUser } from './users.actions';

store.subscribe(() => {
  console.log(`State after dispatch: ${JSON.stringify(store.getState(), null, 2)}`);
});

store.dispatch(addUser({ id: 1, name: 'Alice' }));
store.dispatch(addUser({ id: 2, name: 'Bob' }));
store.dispatch(deleteUser(2));
store.dispatch(addUser({ id: 3, name: 'Eve' }));
store.dispatch(deleteUser(1));
