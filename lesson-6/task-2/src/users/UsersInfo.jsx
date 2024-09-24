import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isFetchingSelector, userDataSelector } from './users.selectors';
import Spinner from './Spinner.jsx';

const UserInfo = ({ userData, isFetching }) => {
  if (isFetching) {
    return <Spinner />;
  }
  if (!userData) {
    return null;
  }
  return (
    <div className="user">
      <img className="user__avatar" src={userData.avatar_url} alt="User Avatar" />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  userData: PropTypes.shape(),
  isFetching: PropTypes.bool.isRequired,
};

UserInfo.defaultValue = {
  userData: null,
};

const mapState = state => {
  return {
    isFetching: isFetchingSelector(state),
    userData: userDataSelector(state),
  };
};

export default connect(mapState)(UserInfo);
