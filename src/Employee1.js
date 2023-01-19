import React from 'react'
import Employee2 from './Employee2'

export default function Employee1() {
    const Employees = ["shubha", "rahul", "mandar", "priya"]
    let names = Employees.map((e, index) => <li key={index}> {e} </li>)
    const EmployeeId = ["222", '24353', '2324', '34324']
    const employeeDetails =
        [
            {
                name: "shub",
                id: '1112'
            },
            {
                name: 'rahul',
                id: '2322'
            }
        ]
    return (
        <>
            {names}
            {/* {Employees.map(e => <h1>name of the employee {e}  </h1>)} */}
            {/* {EmployeeId.map(e => <h1>employee Id {e}</h1>)} */}
            {/* {employeeDetails.map(e => <h1> Employee name {e.name} and Employee id {e.id}</h1>)} */}
            {/* {Employees.map(e => <Employee2 eee={e} />)} */}
        </>
    )
}
