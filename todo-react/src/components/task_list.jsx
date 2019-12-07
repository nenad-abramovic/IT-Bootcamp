import React from 'react';
import { Task } from './task';

export const TaskList = ({tasks, changeState, deleteTask}) => {
    return (
        <div className="todo-list">
            {tasks.map(task => <Task task={task} changeState={changeState} deleteTask={deleteTask} key={task.id}></Task>)}
        </div>
    );
}