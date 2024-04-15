import React from 'react';
import { FaTwitter } from 'react-icons/fa';

const TwitterButton = (props) => (
    <a
    id='tweet-quote'
    href='twitter.com/intent/tweet'
    style={{
        marginRight: "10px",
        backgroundColor: props.style
    }}
    >
    <FaTwitter color='white'/>
    </a>
)

export default TwitterButton;