import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import TaskEdit from '../settings/TaskEdit';
import { getTasks } from '../../actions/task';
import { logout } from '../../actions/auth';
import cheese from '../../assets/cheese.png';

const Settings = ({
  getTasks,
  logout,
  auth: { user },
  task: { tasks, loading },
}) => {
  // if (isAuthenticated) {
  //   return <Redirect to="/landing" />;
  // }
  useEffect(() => {
    getTasks();
    console.log('testing');
  }, []);

  const [data, setData] = useState(false);
  const [edit, setEdit] = useState(false);

  const longDate = new Date(user.date);
  const m = longDate.getMonth() + 1;
  const d = longDate.getDate();
  const y = longDate.getFullYear();
  const date =
    JSON.stringify(m) + '/' + JSON.stringify(d) + '/' + JSON.stringify(y);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="sethead">Settings</h1>
      <h2 className="setsub">
        Profile Info
        <i
          onClick={(e) => setData(!data)}
          className="fas fa-pen editbtn icon"
        ></i>
      </h2>
      <div className="card">
        <h3 className="">
          <span className="info">Name:</span>
          <span className="data">{user.name}</span>
        </h3>

        <h3 className="">
          <span className="info">Email:</span>
          <span className="data">{user.email}</span>
        </h3>

        <h3 className="">
          <span className="info">Joined:</span>
          <span className="data">{date} </span>
        </h3>
      </div>
      <h2 className="setsub">
        Edit Tasks
        <i
          onClick={(e) => setEdit(!edit)}
          className="fas fa-pen editbtn icon"
        ></i>
      </h2>
      <div className="card">
        {tasks.map((task) => (
          <TaskEdit key={task._id} task={task} edit={edit} data={data} />
        ))}
      </div>
      <div className="logout">
        <button onClick={(e) => logout()} className="btn authbtn">
          Logout
        </button>
      </div>
      <div className="signature">
        <h6 className="sn">Created by Shisan Nafiz</h6>
        <img className="cheese" src={cheese}></img>
      </div>
    </Fragment>
  );
};

Settings.propTypes = {
  getTasks: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  task: state.task,
  auth: state.auth,
});

export default connect(mapStateToProps, { getTasks, logout })(Settings);
