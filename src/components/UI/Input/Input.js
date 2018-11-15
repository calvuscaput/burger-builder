import React from 'react';

import classes from './Input.module.sass';

const input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case ('input'):
      inputElement = <input 
        className={classes.Input}
        {...props.elementConfig} 
        value={props.value}
        onChange={props.changed}/>;
      break;
    case ('textarea'):
      inputElement = <textarea
        className={classes.Input} 
        {...props.elementConfig} 
        value={props.value}
        onChange={props.changed}/>;
      break;
      case ('select'):
      inputElement = (
      <select
        className={classes.Input} 
        value={props.value}
        onChange={props.changed}> 
        {props.elementConfig.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.displayValue}
          </option>
        ))}
        </select>);
      break;
    default:
      inputElement = <input 
        className={classes.Input} 
        {...props.elementConfig} 
        value={props.value}
        onChange={props.changed}/>;
  }

  return (
    <div className={classes.inputElement}>
      <label className={classes.Label} htmlFor="">{props.label}</label>
      {inputElement}
    </div>
  )
}

export default input;