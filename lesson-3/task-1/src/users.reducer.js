import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initState = {
  usersList: [],
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        // Добавляем нового пользователя в список
        usersList: state.usersList.concat(action.payload.userData),
      };
    case DELETE_USER:
      // Фильтруем список, исключая пользователя с указанным id
      const newList = state.usersList.filter(user => user.id !== action.payload.userId);
      return {
        ...state,
        usersList: newList,
      };
    case UPDATE_USER:
      // Обновляем данные пользователя по id
      const updatedList = state.usersList.map(user => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            ...action.payload.userData,
          };
        }
        return user;
      });
      return {
        ...state,
        usersList: updatedList,
      };
    default:
      return state;
  }
};

export default usersReducer;
