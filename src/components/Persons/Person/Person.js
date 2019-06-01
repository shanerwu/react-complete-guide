import React, { Component } from 'react';
import classes from './Person.module.css'

class Person extends Component {

    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" value={this.props.name} onChange={this.props.changed} />
            </div>
        )
    }

}

export default Person;