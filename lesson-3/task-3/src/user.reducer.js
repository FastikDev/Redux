import { ADD_USER, DELETE_USER } from './user.actions';

const initState = {
  user: null,
};

const usersReducer = (state = initState, action) => {
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
