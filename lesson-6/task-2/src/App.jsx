import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserInfo from './users/UsersInfo';
import SearchField from './users/SearchField';

const App = () => {
  return (
    <Provider store={store}>
      <UserInfo />
      <SearchField />
    </Provider>
  );
};

export default App;
