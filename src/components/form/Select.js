import React from 'react';

export const Select = (props) => (
    <div>
        <div className="form-group">
            <label>{props.label}: </label>
            <select className={`${props.error ? 'error-field' : ''}`} onChange={props.onChange}>
                <option></option>
                {
                    props.options.map((option, index) => <option value={option.toLowerCase()} key={index}> { option } </option>)
                }
            </select>
        </div>
        <div className="form-group">
            { props.error && <small> {props.error}</small> }
        </div>
    </div>
)
