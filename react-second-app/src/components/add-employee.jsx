import React,  { Component } from 'react';

export class AddEmployee extends Component {
    constructor() {
        super();
        this.state = {
            employee: {
                name: '',
                salary: '',
                age: '',
            }
        };

    }
    handleChange = (event) => {
        const property = event.target.name;
        this.state.employee[property] = event.target.value;
    }

    addEmployee = () => {
        console.log('add', this.state);
        fetch('http://dummy.restapiexample.com/api/v1/create', {
            method: 'POST',
            body: JSON.stringify(this.state.employee)
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            console.log('history', this.props.history);
            this.props.history.push('/');
        }
        );
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
                <input type="number" placeholder="salary" name="salary" value={this.state.salary} onChange={this.handleChange} />
                <input type="number" placeholder="age" name="age" value={this.state.age} onChange={this.handleChange} />
                <button onClick={this.addEmployee}>Add</button>
            </div>
        )
    }
}
