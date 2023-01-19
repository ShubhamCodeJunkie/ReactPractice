import React, { Component, createRef } from 'react';


class Refcomponent extends Component {

    componentDidMount() {
        console.log(this.myref);
    }

    constructor(props) {
        super(props)

        this.myref = createRef();
        this.state = {

        }
    }

    handleChange = () => {
        this.myref.current.align = "right";
        // this.myref.current.hidden = true;
        this.myref.current.style.color = "red";

    }

    render() {
        return (
            <div className='App'>
                <h1 ref={this.myref}>this is shubham mahaveer byadagi</h1>
                <button onClick={this.handleChange}>playwithabovetextrefconceptused</button>
            </div>
        );
    }
}

export default Refcomponent;