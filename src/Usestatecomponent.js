import React, { useState } from 'react'

export default function Usestatecomponent() {
    // const myarray = useState('shubham');
    const [name, setname] = useState('shubham');
    // const changestate = () => {
    //     // myarray[1]('kumar')
    //     setname('rahul')

    // }
    return (
        <div className='App'>
            <h2>{name}</h2>
            <button onClick={() => setname('rahul')}>Update Name</button>
        </div>

        // <div className='App'>
        //     <h2>{myarray[0]}</h2>
        //     <button onClick={changestate}>Update Name</button>
        // </div>

        //     <div className='App'>
        //     <h2>{myarray[0]}</h2>
        //     <button onClick={() => myarray[1]('kumar')}>Update Name</button>
        // </div>
    )
}
