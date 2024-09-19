import React from 'react';
import { UserContext } from './user-context';

class UserMenu extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ name, avatar_url }) => (
          <div className="menu">
            <span className="menu__greeting">Hello, {name}</span>
            <img alt="User Avatar" className="menu__avatar" src={avatar_url} />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default UserMenu;
