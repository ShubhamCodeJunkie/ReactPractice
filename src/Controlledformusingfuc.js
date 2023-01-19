import React, { useState } from 'react'

export default function Controlledformusingfuc() {
    const [name, setName] = useState('shubham')
    const [textarea, setTextarea] = useState('')
    const [selectop, setSelect] = useState('USA')
    const [checkbox1, setCheckbox] = useState(false)
    const handletextchange = (e) => {

        setName(e.target.value.toLowerCase())
    }

    const handleformsubmission = (e) => {

        e.preventDefault();
        console.log(e.target)
        console.log(e.target[0].value.toUpperCase());
        console.log(e.target[1].value.toUpperCase());
        console.log(e.target[2].value);

    }
    return (
        <div className='App'>
            <form onSubmit={handleformsubmission}>
                <label htmlFor=""> Enter Name: &nbsp;&nbsp;</label>
                <input type="text" value={name} onChange={handletextchange} />
                <br />
                <label htmlFor="" style={{ verticalAlign: "top" }}>Comments: &nbsp;&nbsp;</label>
                <textarea name="textarea" id="" cols="30" rows="10" onChange={(e) => { setTextarea(e.target.value) }}>{textarea}</textarea>
                <br />
                <label htmlFor="">Select Country: &nbsp;&nbsp;</label>
                <select name="" id="" value={selectop} onChange={(e) => { setSelect(e.target.value) }}>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="CANADA">CANADA</option>
                    <option value="BRAZIL">BRAZIL</option>

                </select>
                <br />
                <label htmlFor="">Yes I agree the terms: &nbsp;&nbsp;</label>
                <input type="checkbox" value={checkbox1} onChange={(e) => { (setCheckbox(e.target.checked)) }} />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
