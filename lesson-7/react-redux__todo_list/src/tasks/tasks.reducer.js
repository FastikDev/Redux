import { TASKS_LIST_RECIEVED } from './tasks.actions';

const initState = {
  tasksList: [],
};

const tasksReducer = (state = initState, action) => {
  switch (action.type) {
    case TASKS_LIST_RECIEVED:
      return {
        ...state,
        tasksList: action.payload.tasklist,
      };
    default:
      return state;
  }
};

export default tasksReducer;
