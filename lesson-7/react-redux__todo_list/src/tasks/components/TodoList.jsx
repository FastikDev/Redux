import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TasksList from './TasksList.jsx';
import CreateTaskInput from './CreateTastInput.jsx';
import * as tasksActions from '../tasks.actions';
import { sortedTasksListSelector } from '../task.selectors.js';

const TodoList = ({ getTasksList, updateTask, deleteTask, createTask, tasks }) => {
  useEffect(() => getTasksList(), [getTasksList]);

  return (
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskInput onCreate={createTask} />
        <TasksList
          tasks={tasks}
          handleTasksStatusChange={updateTask}
          handleTaskDelete={deleteTask}
        />
      </main>
    </>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      createdAd: PropTypes.string,
      done: PropTypes.bool,
    }),
  ).isRequired,
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

const mapDispatch = {
  getTasksList: tasksActions.getTaskList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask,
};

const mapState = state => {
  return {
    tasks: sortedTasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TodoList);
