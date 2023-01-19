import React, { Component } from 'react'

export default class Csspracticeclasscomponent extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            active: false

        })
    }

    changeColor = () => {
        this.setState = ({
            active: true
        })
    }





    render() {
        return (
            <button onClick={this.changeColor}>Csspracticeclasscomponent</button>
        )
    }
}
