import React from "react";
import { FaTwitter } from 'react-icons/fa';

const QuoteMachine = (props) => (
<>
    <h2>
        <span id='text'>{props.selectQuote ? `${props.selectQuote.quote}\n` : ''}</span>
    </h2>
    
    <span id='author'>{props.selectQuote ? `-${props.selectQuote.author}` : ''}</span>

    <div className='buttons'>
        <a
        id='tweet-quote'
        target="_blank"
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${props.selectQuote ? `"${props.selectQuote.quote}"  ${props.selectQuote.author}` : ''}`}

        style={{
            marginRight: "10px",
            backgroundColor: props.style
        }}
        >
        <FaTwitter color='white'/>
        </a>

        <button 
        id="new-quote" 
        onClick={props.clickHandler}
        style={{
            backgroundColor: props.style
        }}
        >{props.buttonDisplayName}
        </button>
    </div>
</>
);

export default QuoteMachine;
