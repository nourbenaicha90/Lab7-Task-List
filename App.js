import React from 'react';
import TaskList from './components/TaskList';
import './style/styleCss.css'
const App = () => {
  return (
    <div>
      <h1 className='h1'>Task List Application</h1>
      <TaskList />
    </div>
  );
};

export default App;
