const addUser = user => ({
  type: 'ADD_USER',
  payload: user,
});

const deleteUser = id => ({
  type: 'DELETE_USER',
  payload: id,
});

export { addUser, deleteUser };
