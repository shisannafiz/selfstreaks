import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../../actions/task';

const TaskForm = ({ addTask }) => {
  const [title, setText] = useState('');
  const yest = new Date().getDay() - 1;
  const last = new Date().getDay() - 1;

  return (
    <div className="">
      <form
        className="form addtask"
        onSubmit={(e) => {
          e.preventDefault();
          addTask({ title, yest, last });
          setText('');
        }}
      >
        <input
          className="addtitle"
          type="text"
          name="name"
          cols="30"
          rows="1"
          maxLength="25"
          placeholder="Starting today, I will.."
          value={title}
          onChange={(e) => setText(e.target.value)}
          required
        ></input>
        <button type="submit" className="btn addbtn">
          <i className="fas fa-plus plus"></i>
        </button>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default connect(null, { addTask })(TaskForm);
