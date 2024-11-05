// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <h2>OTBT Task Management</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        {user && <li><Link to="/profile">Profile</Link></li>}
        {user ? (
          <li><button onClick={logout}>Logout</button></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
