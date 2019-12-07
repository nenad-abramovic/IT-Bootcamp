import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { InputForm } from './components/input_form';
import { TaskList } from './components/task_list';

let data = [
    {
        task: 'Nauciti module',
        id: 563231,
        done: true
    },
    {
        task: 'Nesto',
        id: 324424,
        done: false
    }
]


const App = () => {
    const [tasks, setTasks] = useState(data);
    let addTask = (task) => {
        let x = [...tasks];
        x.push({
            task: task,
            id: Date.now(),
            done: false
        });
        setTasks(x);
    }

    let changeState = (id) => {
        let x = [...tasks];
        x[x.findIndex(a => a.id === id)].done = !x[x.findIndex(a => a.id === id)].done; 
        // x = x.map(y => {
        //     if(y.id === id) {
        //          y.done = !y.done;
        //          return y;
        //     }
        //     return y
        // })
        setTasks(x);
        }

        let deleteTask = (id) => {
            let x = [...tasks];
        x = x.filter(y => y.id === id ? false : true);
        console.log(x);
        setTasks(x);
        }
return(
    <>
    <h1>Task List</h1>
    <InputForm click={addTask}></InputForm>
    <TaskList tasks={tasks} changeState={changeState}  deleteTask={deleteTask}></TaskList>
    </>
)
}

ReactDOM.render(<App />, document.getElementById('root'));