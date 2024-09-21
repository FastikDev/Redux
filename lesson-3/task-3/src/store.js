import { createStore, combineReducers } from 'redux';
import languageReducer from './language.reducer';
import cartReducer from './cart.reducer';
import usersReducer from './user.reducer';

const appReducer = combineReducers({
  language: languageReducer,
  user: usersReducer,
  cart: cartReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
