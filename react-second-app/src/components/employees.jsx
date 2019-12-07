import Employee from './employee';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Employees extends Component {
    constructor() {
        super();
        this.state = { employees: [] };
        this.getEmployees();
    }
    
    getEmployees() {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.setState({ employees: json.slice(-10) });
        }
        );
    }

    render() {
        return (
            <div>
                <ul>
                    { this.state.employees.map((employee) => {
                        return (<Employee key={employee.id} employee={employee}></Employee>)
                    })
                    }
                </ul>
                <Link to="/add-employee">Add Employee</Link>
            </div>
        );
    }
}