import React from 'react';
import { FaTwitter } from 'react-icons/fa';

const TwitterButton = (props) => (
    <a
    id='tweet-quote'
    target="_blank"
    href={`https://twitter.com/intent/post?&text=${props.selectQuote.quote}`}
    style={{
        marginRight: "10px",
        backgroundColor: props.style
    }}
    >
    <FaTwitter color='white'/>
    </a>
)

export default TwitterButton;