import React from 'react';

const Employee = (props) => {
    const employee = props.employee;
    return(<li>{employee.employee_name}</li>);
}

export default Employee;