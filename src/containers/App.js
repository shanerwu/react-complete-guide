import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: 'qaz', name: 'Max', age: 28 },
        { id: 'wsx', name: 'Manu', age: 29 },
        { id: 'edc', name: 'Yo', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Yo', age: 27 }
      ]
    });
  }

  nameChangHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // always create a copy, and then manipulate it.
    const person = { ...this.state.persons[personIndex] };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonHan = () => {
    const doseShow = this.state.showPersons;
    this.setState({
      showPersons: !doseShow
    });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        click={this.deletePersonHandler}
        changed={this.nameChangHandler}
      />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          click={this.togglePersonHan} />
        {persons}
      </div>
    );
  }
}

export default App;
