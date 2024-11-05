import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome, {user.role}</h2>
      <TaskList />

      {user.role === 'Project Manager' || user.role === 'Team Leader' ? (
        <TaskForm />
      ) : null}
    </div>
  );
};

export default Dashboard;
