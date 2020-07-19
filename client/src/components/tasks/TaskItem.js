import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateStreak } from '../../actions/task';

const TaskItem = ({
  updateStreak,
  auth,
  task: { _id, user, title, streak, complete },
  today,
}) => {
  const task = complete ? 'complete task' : 'task';

  return (
    <div>
      {!auth.loading && user === auth.user._id && (
        <div onClick={(e) => updateStreak(_id, today)} className={task}>
          <div className="task-inner">
            <span className="title">{title}</span>
            <span className="streak"> {streak}</span>
          </div>
        </div>
      )}
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  updateStreak: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { updateStreak })(TaskItem);
