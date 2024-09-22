const initialState = {
  usersList: [
    { id: 'id-0', age: 21, name: 'Bob' },
    { id: 'id-1', age: 17, name: 'Tom' },
    { id: 'id-2', age: 18, name: 'Tad' },
    { id: 'id-3', age: 45, name: 'Justin' },
    { id: 'id-4', age: 45, name: 'Franklin' },
    { id: 'id-5', age: 45, name: 'John' },
    { id: 'id-6', age: 45, name: 'Andrew' },
    { id: 'id-7', age: 45, name: 'Pol' },
    { id: 'id-8', age: 45, name: 'Ron' },
    { id: 'id-9', age: 45, name: 'Harry' },
    { id: 'id-10', age: 45, name: 'Anna' },
  ],
  currentPage: 0,
};

// Константы для типов действий
const PREV_PAGE = 'PREV_PAGE';
const NEXT_PAGE = 'NEXT_PAGE';

const userReducer = (state = initialState, action) => {
  const totalPages = Math.floor(state.usersList.length / 3); // Количество страниц

  switch (action.type) {
    case PREV_PAGE:
      return {
        ...state,
        currentPage: Math.max(state.currentPage - 1, 0),
      };
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: Math.min(state.currentPage + 1, totalPages),
      };
    default:
      return state;
  }
};

export default userReducer;
