import { tasksListSelector } from './task.selectors';
import * as tasksGateway from './tasksGateway';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

const taskRecieved = tasklist => {
  return {
    type: TASKS_LIST_RECIEVED,
    payload: {
      tasklist,
    },
  };
};

export const getTaskList = () => {
  const thunkAction = function (dispatch) {
    tasksGateway.fetchTasksList().then(taskList => dispatch(taskRecieved(taskList)));
  };

  return thunkAction;
};

export const updateTask = taskId => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const tasks = tasksList.find(task => task.id === taskId);
    const updatedTask = {
      ...tasks,
      done: !tasks.done,
    };
    tasksGateway.uptateTasks(taskId, updatedTask).then(() => dispatch(getTaskList()));
  };

  return thunkAction;
};

export const deleteTask = taskId => {
  const thunkAction = function (dispatch) {
    tasksGateway.deleteTask(taskId).then(() => dispatch(getTaskList()));
  };

  return thunkAction;
};

export const createTask = text => {
  const thunkAction = function (dispatch) {
    const taskDate = {
      text,
      done: false,
      createdAd: new Date().toDateString(),
    };
    tasksGateway.createTask(taskDate).then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};
