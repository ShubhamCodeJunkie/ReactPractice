import React, { Component } from 'react'

export default class Childcomponent extends Component {
    render() {
        return (
            <>
                <button onClick={this.props.callmethod}>Click me </button>

                <button onClick={() => this.props.callmethod2('shub', 'byadagi')}>method with parameter</button>
            </>
        )
    }
}
