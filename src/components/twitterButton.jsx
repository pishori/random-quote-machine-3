import React from 'react';
import { FaTwitter } from 'react-icons/fa';

const TwitterButton = (props) => (
    <a
    id='tweet-quote'
    target="_blank"
    href='twitter.com/intent/post'
    style={{
        marginRight: "10px",
        backgroundColor: props.style
    }}
    >
    <FaTwitter color='white'/>
    </a>
)

export default TwitterButton;