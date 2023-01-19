import React, { useEffect, useRef } from 'react'

export default function Userefcomponent() {
    const Firstref = useRef();
    const LastNameRef = useRef();
    let firstName = 'shubham'
    let LastName = 'byadagi'

    useEffect(() => {
        console.log(Firstref);
        console.log(LastNameRef);
        Firstref.current.style.color = 'Red';
        Firstref.current.focus();
    })
    const handleSubmission = (e) => {
        e.preventDefault();
        Firstref.current.style.color = 'Blue';

    }

    return (
        <div className='App'>
            <form action="" onSubmit={handleSubmission}>
                <label htmlFor="" >Enter First Name: &nbsp;</label>
                <input type="text" value={firstName} ref={Firstref} />
                <br />
                <br />
                <label htmlFor="">Enter Last Name:
                    &nbsp;</label>
                <input type="text" value={LastName} ref={LastNameRef} />
                <br />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

