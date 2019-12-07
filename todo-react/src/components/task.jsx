import React from 'react';

export const Task = ({ task, changeState, deleteTask }) => {
    return (
        <div className='todo'>
            <span className={`${task.done}`}>{task.task}</span>
            <div>
                <input type="checkbox" checked={`${task.done}`} onChange={() => changeState(task.id)} />
                <button onClick={() => deleteTask(task.id)}>X</button>
            </div>
        </div>
    )
}