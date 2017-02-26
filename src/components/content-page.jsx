import React from 'react';

const Content = (props) => {

    console.log();

    return (
        <div style={{ fontSize : props.fontSize}}>{props.content}</div>
    )
}

export default Content;