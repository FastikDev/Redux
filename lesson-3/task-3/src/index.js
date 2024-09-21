import store from './store';
import { setLanguage } from './language.actions';
import { setUser, removeUser } from './user.actions';
import { addProduct, removeProduct } from './cart.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('es'));
store.dispatch(setLanguage('js'));

store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(removeUser());

store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(removeProduct(76));
