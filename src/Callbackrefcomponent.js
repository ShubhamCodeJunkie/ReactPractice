import React, { Component } from 'react'

export default class Callbackrefcomponent extends Component {

    constructor(props) {
        super(props)

        this.refc = null;

        this.state = {

        }
    }

    callfun = (element) => {
        this.refc = element;
    }

    componentDidMount() {
        console.log(this.refc);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.refc.style.color = 'Red';
    }
    render() {
        return (
            <div className='App'>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Enter your name' ref={this.callfun} />
                    <input type="submit" value='submit' />
                </form>
            </div>
        )
    }
}
