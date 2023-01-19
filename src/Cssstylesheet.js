import React, { Component } from 'react'
import './Cssstylesheett.css'
export default class Cssstylesheet extends Component {
    render() {
        let x = this.props.check ? 'setup1' : 'setup2'
        return (
            <>
                <h1 className={x}>shubham byadagi</h1>
                <h1 className={`${x} myfont`}>shubham byadagi</h1>
                <h2 className='setup1 setup2'>rahul byadagi</h2>
            </>)
    }
}
