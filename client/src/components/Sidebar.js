// src/components/Sidebar.js
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  return (
    <aside>
      <ul>
        <li>All Tasks</li>
        {user.role === 'Project Manager' && <li>Create New Task</li>}
        {user.role === 'Team Leader' && <li>Assign Tasks</li>}
      </ul>
    </aside>
  );
};

export default Sidebar;
