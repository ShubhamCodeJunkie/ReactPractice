import React from 'react'
import { Classcompractice } from './Classcompractice'
import Parentcomponent from './Parentcomponent'

export default function () {
    const name = 'shubam'

    // if (name == 'shubham')
    //     return <Parentcomponent />
    // else
    //     return <Classcompractice />
    // return (
    //     <>
    //         {name == 'shubham' ? <Parentcomponent /> : <Classcompractice />}
    //     </>
    // )

    return (
        <>
            {name == 'shubham' && <Parentcomponent />}
        </>
    )




}
