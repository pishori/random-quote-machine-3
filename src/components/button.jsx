import React from 'react';

const Button = (props) => (
    <button 
    id="new-quote" 
    onClick={props.clickHandler}
    style={{
        backgroundColor: props.style
    }}
    >{props.buttonDisplayName}
    </button>
);

export default Button;