import React, { useState } from 'react'

export default function Usestatewithobjects() {
    const [emp, SetEmp] = useState({
        name: "shubham",
        salary: 1000,
        isMarried: false
    }
    )
    const UpdateEmployee = () => {
        SetEmp(previousstate => {
            return {
                ...previousstate,
                salary: 2000
            }
        }



        )
    }

    // const UpdateEmployee = () => {
    //     SetEmp({
    //         name: "mandar",
    //         salary: 3000,
    //         isMarried: true
    //     })
    // }

    return (
        <div className='App'>
            <h1>{emp.name}</h1>
            <h1>{emp.salary}</h1>
            <h1>{emp.isMarried.toString()}</h1>
            <button onClick={UpdateEmployee}>Update Employee</button>
        </div>
    )
}
