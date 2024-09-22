import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import PropTypes from 'prop-types';
import * as usersActions from './users.actions';
import { currentPageSelector, usersListSelector } from './usesrs.selector';

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

UsersList.PropTypes = {
    users: PropTypes.arrayOf(PropTypes.share()).isRequired,
    currentPage: PropTypes.string.isRequired,
    goPrev: PropTypes.func.isRequired,
    goNext: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  users: usersListSelector(state),
  currentPage: currentPageSelector(state),
  itemsPerPage: 3,
});

const mapDispatchToProps = {
  goPrev: usersActions.goPrevPage,
  goNext: usersActions.goNextPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
