import React, { useState } from 'react';

export const InputForm = ({click}) => {
    const [task, setTask] = useState('');
    return (
        <div>
            <input type="text" onChange={(event) => setTask(event.target.value)} name="" id=""/>
            <button onClick={() => click(task)}>Add Task</button>
        </div>
    );
}