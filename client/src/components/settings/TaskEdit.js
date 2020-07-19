import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTask } from '../../actions/task';

const TaskEdit = ({
  deleteTask,
  auth,
  task: { _id, user, title, streak, complete },
  edit,
  data,
}) => {
  const show = !edit ? 'hide' : 'btn deletebtn';
  const hide = edit ? 'hide' : 'streak-edit';

  return (
    <div>
      {!auth.loading && user === auth.user._id && (
        <div className="task-edit">
          <div className="task-edit-inner">
            <span className="title-edit">{title}</span>
            <span className={hide}> {streak}</span>
            <button className={show} onClick={(e) => deleteTask(_id)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

TaskEdit.propTypes = {
  task: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteTask })(TaskEdit);
