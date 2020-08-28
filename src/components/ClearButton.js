import React from 'react';
import './ClearButton.css';

export const ClearButton = (props) => (
    <button className="clear-btn" onClick={props.handleClear}>Clear</button>
)