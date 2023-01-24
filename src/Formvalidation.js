import React from 'react'
import { useState } from 'react'

export default function Formvalidation() {
    const[name,setName] = useState()
    const[email,setEmail] = useState()
    const[errormsg,setErrormsg] = useState(false)
    const[erroreamilmsg,setErroremailmsg] = useState(false)
    const RegexE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   const HandleNameChange = (e) =>{
    const name = e.target.value;
    if(name.length <3)
    {
        setErrormsg(true)
        setName(e.target.value)
    }
    else
    {
        setName(e.target.value)
        setErrormsg(false)
    }
   }

   const HandleEmailChange = (e) => {
    const email = e.target.value;
    if(!email.match(RegexE))
    {
        setErroremailmsg(true)
    }
    else{
        setErroremailmsg(false)
    }
    setEmail(e.target.value)
   }
    return (
    <div>
        <label>Enter Name : </label>
        <input type="text" value={name} onChange={HandleNameChange}/>
        <br /> <br />
        {errormsg  ? <span style={{color:'red'}}>Name must have atleast three characters</span> : ''}
        <br /><br />
        <label htmlFor="">Enter Email :</label>
        <input type="text" value={email} onChange={HandleEmailChange} />
        <br /><br />
        {erroreamilmsg  ? <span style={{color:'red'}}>Enter valid mail id</span> : ''}
        <input type="submit" value='submit' />  
    </div>
  )
}
