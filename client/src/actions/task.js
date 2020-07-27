import axios from 'axios';
// import { setAlert } from './alert';
import {
  GET_TASKS,
  TASK_ERROR,
  UPDATE_STREAK,
  DELETE_TASK,
  ADD_TASK,
} from './types';

// Get Tasks
export const getTasks = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/tasks/`);
    dispatch({
      type: GET_TASKS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: 'error ' },
    });
  }
};

// Add Task
export const addTask = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(`/api/tasks`, formData, config);

    dispatch({
      type: ADD_TASK,
      payload: res.data,
    });

    // dispatch(setAlert('Task Created', 'success'));
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: 'err' },
    });
  }
};

// Delete Task
export const deleteTask = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/tasks/${id}`);

    dispatch({
      type: DELETE_TASK,
      payload: id,
    });

    // dispatch(setAlert('Task Removed', 'success'));
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: 'err' },
    });
  }
};

// Update streak on a single task
export const updateStreak = (id, today) => async (dispatch) => {
  try {
    const task = await axios.get(`/api/tasks/${id}`);

    const { complete, last, yest, streak } = task.data;

    var body = {
      streak,
      complete,
      last,
    };

    if (last !== today && today !== yest && yest !== last) {
      body = {
        streak: streak + 1,
        complete: true,
        yest: today - 1,
        last: today,
      };
    } else if (last === yest && last !== today) {
      body = {
        streak: streak + 1,
        complete: true,
        last: today,
      };
    } else if (last === today && last !== yest) {
      body = {
        streak: streak - 1,
        complete: false,
        last: yest,
      };
    } else {
      console.log('err');
    }

    const res = await axios.put(`/api/tasks/${id}`, body);

    dispatch({
      type: UPDATE_STREAK,
      payload: { id, task: res.data },
    });
    dispatch(getTasks());
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: 'error ' },
    });
  }
};

// Clear and Check all tasks
export const clearCheck = (tasks, today) => {
  clearComplete(tasks);
  checkStreak(tasks, today);
};

// Set complete to false for all tasks
export const clearComplete = (tasks) => {
  try {
    const body = {
      complete: false,
    };
    tasks.map((task) => axios.put(`/api/tasks/${task._id}`, body));
  } catch (err) {
    console.log('err');
  }
};

// Check streak on all tasks
export const checkStreak = (tasks, today) => {
  try {
    const body = {
      streak: 0,
      complete: false,
      last: today - 1,
      yest: today - 1,
    };
    // eslint-disable-next-line
    tasks.map((task) => {
      if (
        today - task.last > 1 ||
        (today === 0 && task.last === 5) ||
        (today === 1 && task.last === 6)
      )
        axios.put(`/api/tasks/${task._id}`, body);
    });
  } catch (err) {
    console.log('err');
  }
};
