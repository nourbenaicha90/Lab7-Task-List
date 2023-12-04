import React, { useState } from 'react';
import '../style/styleCss.css' 

const Task = ({ task, onDelete, onSubtaskDone, description }) => {
  const [subtasks, setSubtasks] = useState([]);

  const handleAddSubtask = () => {
    const newSubtask = prompt('Enter a subtask:');
    if (newSubtask) {
      setSubtasks([...subtasks, newSubtask]);
    }
  };

  const handleSubtaskDone = (index) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[index] = '✓ ' + updatedSubtasks[index];
    setSubtasks(updatedSubtasks);
    onSubtaskDone();
  };

  return (
    <div className='task'>
      <button onClick={() => onDelete()} className='button'>X</button>
      <p className='titel'>{task}</p>
      
      <p>{description}</p>
      <ul>
        {subtasks.map((subtask, index) => (
          <li key={index} className='li'>
            {subtask}
            <button onClick={() => handleSubtaskDone(index)} className='done'>Done</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddSubtask}>Add Subtask</button>
    </div>
  );
};

export default Task;
