import React, { useState } from 'react'

export default function Csspracticeinreact() {
    let obj1 = {
        color: "red",
        backgroundColor: "green",
        fontSize: "50px"
    }
    let obj2 = {
        backgroundColor: "blue",
        fontSize: "50px",
        fontFamily: 'cooper'
    }


    const [style1, style2] = useState({
        color: "red",
        backgroundColor: "green",
        fontSize: "50px"
    });
    const changeColor = () => {
        if (style1.color == "red") {
            style2({
                backgroundColor: "blue",
                fontSize: "50px",
                fontFamily: 'cooper'
            })
        }
        else {
            style2({
                color: "red",
                backgroundColor: "green",
                fontSize: "50px"
            })
        }
    }

    return (
        <>
            <div>Csspracticeinreact</div>
            <h1 className="App" style={{ color: "red", backgroundColor: "yellow" }}>shubham byadagi efsfaesfda</h1>
            <h1 className="App" style={obj1}>shubham byadagi efsfaesfda</h1>
            <h1 className="App" style={{ ...obj1, ...obj2 }}>shubham byadagi efsfaesfda</h1>
            <button className="App" onClick={changeColor} style={style1}  >click me to change color</button>
        </>)
}
