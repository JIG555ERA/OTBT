// src/components/TaskDetails.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const TaskDetails = ({ taskId }) => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await api.get(`/tasks/${taskId}`);
      setTask(data);
    };
    fetchTask();
  }, [taskId]);

  if (!task) return <p>Loading...</p>;

  return (
    <div>
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <p>Assigned to: {task.assignee}</p>
      <p>Description: {task.description}</p>
      {/* Additional functionality can go here */}
    </div>
  );
};

export default TaskDetails;
