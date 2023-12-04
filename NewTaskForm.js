import React, { useState } from 'react';
import '../style/styleCss.css' 


const NewTaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      onAddTask({ task, description });
      setTask('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='formNewtask'>
      <input
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <textarea
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;
