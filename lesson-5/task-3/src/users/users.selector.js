export const usersSelector = state => {
  return state.users.usersList;
};

export const filterSelector = state => {
  return state.users.filterText;
};
