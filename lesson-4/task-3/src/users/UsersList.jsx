import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as usersActions from '../users.actions';

const UsersList = ({ users, currentPage, itemsPerPage, goPrev, goNext }) => {
  const displayUser = users.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <ul className="users">
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
        goPrev={goPrev}
        goNext={goNext}
      />
      {displayUser.map(user => (
        <User key={user.id} {...user} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  users: state.usersList,
  currentPage: state.currentPage,
  itemsPerPage: 3,
});

const mapDispatchToProps = {
  goPrev: usersActions.goPrevPage,
  goNext: usersActions.goNextPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
