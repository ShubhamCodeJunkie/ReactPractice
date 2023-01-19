import React, { Component } from 'react';

class Classeffect extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('componentmounted');
    }

    componentDidUpdate() {
        console.log('componentupdated');
    }

    updatecount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div className='App'>
                <h1>{this.state.count}</h1>
                <button onClick={this.updatecount}>update count</button>
            </div>
        );
    }
}

export default Classeffect;