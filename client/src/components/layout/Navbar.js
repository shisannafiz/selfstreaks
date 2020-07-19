import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLink = (
    <div className="settings">
      <NavLink className="nopad" to="/settings" activeClassName="selected">
        <span className="hide-sm">Settings</span>
        <i className="fas fa-cog icon"></i>
      </NavLink>
    </div>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link className="nopad" to="/register">
          <span className="hide-sm">Register</span>
          <i className="fas fa-address-card icon hide-l"></i>
        </Link>
      </li>
      <li>
        <Link className="nopad" to="/login">
          <span className="hide-sm">Login</span>
          <i className="fas fa-sign-in-alt icon hide-l"></i>
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar">
      <h1>
        <Link className="name" to="/">
          <i className="fas fa-arrow-circle-up logo"></i> Self Streaks
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLink : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navbar);
