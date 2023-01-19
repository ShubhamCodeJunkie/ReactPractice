import React, { Component, createRef } from 'react'

export default class Uncontrolledcomponent extends Component {
    constructor(props) {
        super(props)
        this.nameref = createRef();
        this.ageref = createRef();

    }

    handleSubmission = (e) => {
        e.preventDefault();
        console.log('Name = ', this.nameref.current.value);
        console.log('Age = ', this.ageref.current.value);
        let email = document.getElementById('email').value;
        console.log('Email = ', email);
    }

    render() {
        return (
            <div className='App'>
                <form action="" onSubmit={this.handleSubmission}>
                    <input type="text" placeholder='Name' ref={this.nameref} />
                    <br />
                    <input type="text" placeholder='Age' ref={this.ageref} />
                    <br />
                    <input type="text" placeholder='Email' id='email' />
                    <br />
                    <input type="submit" value='submit' />
                </form>
            </div>
        )
    }
}
