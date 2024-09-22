import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pagination from './Pagination';
import User from './User';
import * as usersActions from './users.actions';
import { usersListSelector, currentPageSelector } from './usesrs.selector';

const ITEMS_PER_PAGE = 3;
const UsersList = ({ users, currentPage, goPrev, goNext }) => {
  const displayUser = users.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  return (
    <ul className="users">
      <Pagination
        currentPage={currentPage}
        itemsPerPage={ITEMS_PER_PAGE}
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

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  currentPage: PropTypes.number.isRequired,
  goPrev: PropTypes.func.isRequired,
  goNext: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: usersListSelector(state),
  currentPage: currentPageSelector(state),
});

const mapDispatchToProps = {
  goPrev: usersActions.goPrevPage,
  goNext: usersActions.goNextPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
