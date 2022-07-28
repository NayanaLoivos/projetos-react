//item da tarefa

import React from 'react';

import './Task.css';

const Task = ({task}) => {
    return (
    <h3 className='task-container'>{task.title}</h3>
    );
}
 
export default Task;