import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Filter from '../Filter';
import { filterSelector, usersSelector } from './users.selector';
import { filterText } from './users.actions';

const UsersList = ({ users, filterText, setFilterText }) => {
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filterText.toLowerCase()),
  );

  return (
    <div>
      <Filter filterText={filterText} count={filteredUsers.length} onChange={setFilterText} />
      <ul className="users">
        {filteredUsers.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => ({
  users: usersSelector(state),
  filterText: filterSelector(state),
});

const mapDispatch = {
  setFilterText: filterText,
};

export default connect(mapState, mapDispatch)(UsersList);
