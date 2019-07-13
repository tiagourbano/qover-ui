import React from 'react';

export const Input = (props) => (
    <div className="form-group">
        <label>{props.label}: </label>
        <input type={props.type || "text"} value={props.value} className={`${props.class} ${props.error ? 'error-field' : ''}`} onChange={props.onChange} />
        { props.suffix && <span> {props.suffix}</span> }
        { props.error && <small> {props.error}</small> }
    </div>
)
