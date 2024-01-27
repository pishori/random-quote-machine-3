import React from "react";

const QuoteMachine = (props) => (
<>
    <h2>
        <span id='text'>{props.selectQuote ? `${props.selectQuote.quote}\n` : ''}</span>
    </h2>

<span id='author'>{props.selectQuote ? `-${props.selectQuote.author}` : ''}</span>    
</>
);

export default QuoteMachine;
