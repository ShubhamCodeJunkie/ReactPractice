import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

export default class Parentcomponent extends Component {

    Parentmethod = () => {
        alert("I am parent method")
    }

    Parentmethodwithparameter = (name, surname) => {
        // alert('I am ' + name + " "  + surname)
        alert(`I am ${name}  ${surname}`)

    }
    render() {

        return (
            <>
                <Childcomponent callmethod={this.Parentmethod} callmethod2={this.Parentmethodwithparameter} />
                <h1>I am parent class</h1>
            </>
        )
    }
}
