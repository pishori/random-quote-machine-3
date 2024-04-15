import React from 'react';
import { FaTwitter } from 'react-icons/fa';

const TwitterButton = (props) => (
    <a
    id='tweet-quote'
    href={}
    style={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`{
        marginRight: "10px",
        backgroundColor: props.style
    }}
    >
    <FaTwitter color='white'/>
    </a>
)

export default TwitterButton;
