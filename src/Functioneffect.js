import React, { useEffect, useState } from 'react'

export default function Functioneffect() {
    const [count, SetCount] = useState(0);
    const [name, setName] = useState('shubham');

    //run effect first render only
    // useEffect(
    //     () => {
    //         console.log('Hello I am effect ' + count);
    //     }, []
    // )
    useEffect(
        () => {
            console.log('Hello I am effect ' + count);
        }, [count, name]
    )
    useEffect(
        () => {
            console.log('Hello I am effect ' + count);
        }, [count]
    )
    useEffect(
        () => {
            console.log('Hello I am effect for name change');
        }, [name]
    )



    return (
        <div className='App'>
            <h1>{count}</h1>
            <h1>{name}</h1>
            <button onClick={() => SetCount(count + 1)}>update count</button>
            <button onClick={() => setName('rahul')}>update count</button>
        </div>
    )
}
