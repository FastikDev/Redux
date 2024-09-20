import React from 'react';
import Header from './Header';
import { UserContext, user } from './user-context';

class App extends React.Component {
  state = {
    userData: user,
  };

  render() {
    return (
      <UserContext.Provider value={this.state.userData}>
        <div className="page">
          <Header />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
