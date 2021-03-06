import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => alert('Saved data to cloud!'), 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Salmon;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.lightSalmon);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.click}>Switch Name</button>
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(cockpit);