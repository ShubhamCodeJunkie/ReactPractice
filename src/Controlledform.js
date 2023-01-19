import React, { Component } from 'react';

class Controlledform extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: 'Shubham'
        }
    }

    handleChange = (e) => {
        console.log(e);
        this.setState({
            // data: e.target.value.substring(0, 15)
            data: e.target.value
        })

    }

    handleonformsubmission = (e) => {
        e.preventDefault()
        console.log(e);
        console.log(e.target[0].value);
    }
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.handleonformsubmission}>
                    <label htmlFor="">Enter Name:</label>
                    <input type="text" value={this.state.data} onChange={this.handleChange} />
                    <br />


                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default Controlledform;