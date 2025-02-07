import React from 'react'
import { useState } from 'react'

function TaskList() {
    const [tasks, setTasks] = useState([]);
  return (
    <div className='task-list'>
      <ul className='tasks'>
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
        
      </ul>
      <div className='footer'>
        <div className='tasks-left'></div>
        <div className='clear-completed'></div>
        <div className='filters'></div>
      </div>
    </div>
  )
}

export default TaskList
