import React, { useState } from 'react'

export default function Usestatewitharray() {

    const [arr, setarr] = useState([33, 44, 31, 78, 96])
    const changearray = () => {
        setarr(privousstate => {
            return [
                ...privousstate,
                Math.floor(Math.random() * 50)
            ]

        });


    }
    return (
        <div className='App'>
            <ul>
                {arr.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
            <button onClick={changearray}>update array</button>
        </div>
    )
}
