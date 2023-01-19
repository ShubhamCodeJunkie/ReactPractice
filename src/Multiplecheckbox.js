import React, { useState } from 'react'

export default function Multiplecheckbox() {

    const [fruitList, setFruitlist] = useState([]);
    const handleChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setFruitlist([
                ...fruitList, value
            ])
        }
        else {
            setFruitlist(fruitList.filter((e) => (console.log(e, value))))
        }
    }

    const handleSubmission = (e) => {
        e.preventDefault();
        console.log(fruitList);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmission}>
                <label htmlFor="">Select Fruits: &nbsp;</label>

                <input type="checkbox" value="Apple" name='fruits' onChange={handleChange} />
                <label htmlFor="">Apple &nbsp;</label>

                <input type="checkbox" value="Mango" name='fruits' onChange={handleChange} />
                <label htmlFor="">Mango &nbsp;</label>

                <input type="checkbox" value="Banana" name='fruits' onChange={handleChange} />
                <label htmlFor="">Banana &nbsp;</label>

                <input type="checkbox" value="Guava" name='fruits' onChange={handleChange} />
                <label htmlFor="">Guava &nbsp;</label>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
