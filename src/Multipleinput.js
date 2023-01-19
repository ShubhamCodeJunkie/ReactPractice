import React, { useState } from 'react'

export default function Multipleinput() {
    const [data, setData] = useState({
        name: "",
        email: ""
    });


    const HandleOnChange = (e) => {
        console.log(e);
        console.log(e.target.name);
        const value = e.target.value
        const name = e.target.name
        const new_value = (name === "email") ? value.toLowerCase() : value;
        setData((prev) => {
            return {
                // if(} = "email")
                ...prev, [name]: new_value

            }
        })


    }
    return (
        <div className='App'>
            <form>
                <label htmlFor="">Enter Name:</label>
                <input type="text" name='name' value={data.name} onChange={HandleOnChange} />
                <br />
                <br />
                <label htmlFor="">Enter Email:</label>
                <input type="text" name='email' value={data.email} onChange={HandleOnChange} />
                <br />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
