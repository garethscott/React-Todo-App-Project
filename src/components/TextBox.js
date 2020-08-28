import React from 'react';
import './TextBox.css'


export const TextBox = (props) => {
    return (
        <input className="text-box" placeholder="Enter task..." onChange={props.handleChange} value={props.value} />
    )

}