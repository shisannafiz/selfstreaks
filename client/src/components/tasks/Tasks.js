import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import TaskItem from './TaskItem';
import { getTasks, clearCheck } from '../../actions/task';
import TaskForm from './TaskForm';

const Tasks = ({ getTasks, auth: {}, task: { tasks, loading } }) => {
  useEffect(() => {
    getTasks();
  }, []);

  const [today, setToday] = useState(0);

  const next = (day) => {
    if (day === 7) {
      setToday(0);
    } else {
      setToday(day);
    }
    console.log(today);
    clearCheck(tasks, today);
  };

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="header">Daily Tasks</h1>
      <TaskForm />
      <div className="">
        {tasks.map((task) => (
          <TaskItem key={task._id} task={task} today={today} />
        ))}
      </div>

      <button onClick={(e) => next(today + 1)} className="btn btn-primary">
        <i className="fas fa-plus"></i>
      </button>
    </Fragment>
  );
};

Tasks.propTypes = {
  getTasks: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  task: state.task,
  auth: state.auth,
});

export default connect(mapStateToProps, { getTasks })(Tasks);
