// import React, { Fragment, useEffect, useState } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import Spinner from './Spinner';
// import TaskEdit from '../settings/TaskEdit';

// import { getTasks } from '../../actions/task';

// const Landing = ({ getTasks, auth: { user }, task: { tasks, loading } }) => {
//   // if (isAuthenticated) {
//   //   return <Redirect to="/landing" />;
//   // }
//   useEffect(() => {
//     getTasks();
//   }, []);

//   useState();

//   const [data, setData] = useState(false);
//   const [edit, setEdit] = useState(false);

//   return loading ? (
//     <Spinner />
//   ) : (
//     <Fragment>
//       <h1 className="sethead">Settings</h1>
//       <h2 className="setsub">
//         Profile Info
//         <i
//           onClick={(e) => setData(!data)}
//           className="fas fa-pen editbtn icon"
//         ></i>
//       </h2>
//       <div className="card">
//         <h3 className="">
//           <span className="info">Name:</span>
//           <span className="data">Shisan Nafiz</span>
//         </h3>

//         <h3 className="">
//           <span className="info">Email:</span>
//           <span className="data">shisannafiz8@gmail.com</span>
//         </h3>

//         <h3 className="">
//           <span className="info">Joined:</span>
//           <span className="data">July 11, 2020</span>
//         </h3>
//       </div>
//       {/* <h1>{user.name}</h1> */}
//       <h2 className="setsub">
//         Edit Tasks
//         <i
//           onClick={(e) => setEdit(!edit)}
//           className="fas fa-pen editbtn icon"
//         ></i>
//       </h2>
//       <div className="card">
//         {tasks.map((task) => (
//           <TaskEdit key={task._id} task={task} edit={edit} data={data} />
//         ))}
//       </div>
//       <div className="logout">
//         <button className="btn authbtn">Logout</button>
//       </div>

//       {/* <div className="buttons">
//             <Link to="/register" className="btn btn-primary">
//               Sign Up
//             </Link>
//             <Link to="/login" className="btn btn-light">
//               Login
//             </Link>
//           </div> */}
//     </Fragment>
//   );
// };

// Landing.propTypes = {
//   // isAuthenticated: PropTypes.bool.isRequired,
//   getTasks: PropTypes.func.isRequired,
//   task: PropTypes.object.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   // isAuthenticated: state.auth.isAuthenticated,
//   task: state.task,
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { getTasks })(Landing);
