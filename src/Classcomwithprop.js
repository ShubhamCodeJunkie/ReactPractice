import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Classcomwithprop extends Component {
    render() {
        return (

            <>
                <h1>class with props my name is {this.props.name}</h1>
            </>


        )
    }
}

export default Classcomwithprop

Classcomwithprop.propTypes =
{
    name: PropTypes.string
}
