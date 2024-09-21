const initState = {
  usersList: [],
};

const usersReduser = (state = initState, action) => {
  const { usersList } = state;

  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        usersList: [...usersList, action.payload],
      };
    case 'DELETE_USER':
      return {
        ...state,
        usersList: usersList.filter(user => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default usersReduser;
