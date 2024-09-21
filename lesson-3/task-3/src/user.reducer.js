import { ADD_USER, DELETE_USER } from './user.actions';
import { initState } from './store';

const usersReducer = (state = initState.user, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload.userData;
    case DELETE_USER:
      return null;
    default:
      return state;
  }
};

export default usersReducer;
