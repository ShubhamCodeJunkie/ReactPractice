import React, { useContext } from 'react'
import { Lastname, NameContext } from './App'

export default function UsecontextC() {
    const myname = useContext(NameContext)
    const lastname = useContext(Lastname)
    return (
        <div>UsecontextC {myname} {lastname}</div>
    )
}
