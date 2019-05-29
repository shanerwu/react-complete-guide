import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Salmon;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.lightSalmon);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi I'm React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.click}>Switch Name</button>
    </div>
  );
};

export default cockpit;