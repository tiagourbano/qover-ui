import React from 'react';

export const Select = (props) => (
    <div className="form-group">
        <label>{props.label}: </label>
        <select onChange={props.onChange}>
            <option></option>
            {
                props.options.map((option, index) => <option value={option.toLowerCase()} key={index}> { option } </option>)
            }
        </select>
        { props.error && <small> {props.error}</small> }
    </div>
)
