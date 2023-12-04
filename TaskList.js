import React, { useState } from 'react';
import Task from './Task';
import NewTaskForm from './NewTaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleSubtaskDone = () => {
    // Handle subtask done if needed
  };

  return (
    <div>
      <NewTaskForm onAddTask={handleAddTask} />
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task.task}
          onDelete={() => handleDeleteTask(index)}
          onSubtaskDone={handleSubtaskDone}
          description={task.description}
        />
      ))}
    </div>
  );
};

export default TaskList;
