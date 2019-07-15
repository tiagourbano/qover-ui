import React from 'react';

export const Input = (props) => (
  <div>
    <div className="form-group">
      <label>{props.label}: </label>
      <input
        type={props.type || 'text'}
        value={props.value}
        className={`${props.class} ${props.error ? 'error-field' : ''}`}
        onChange={props.onChange}
      />
      {
        props.suffix &&
        <span
          className={`${props.error ? 'error-field' : ''}`}> {props.suffix}
        </span>
      }
    </div>
    <div className="form-group">
      { props.error && <small> {props.error}</small> }
    </div>
  </div>
);
