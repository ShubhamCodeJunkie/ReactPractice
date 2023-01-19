import React from 'react'
import PropTypes from 'prop-types'
import { Classcompractice } from './Classcompractice'
import Classcomwithprop from './Classcomwithprop'
// function Hellomessage(props) {

//     return (
//         <>

//             <h1>hello {props.name}</h1>
//             <h1>hi</h1>
//         </>
//     )
// }

const Hellomessage = (props) => {
    return (
        <>
            <h1>Hello {props.name}</h1>
            <h1>Hi</h1>
            <Classcompractice />
            <Classcomwithprop name={1} />
        </>
    )
}

Hellomessage.propTypes = {

    name: PropTypes.string.isRequired

}

export default Hellomessage;