import React from 'react';

const Content = (props) => {
    return (
        <div style={{ fontSize : props.fontSize }}>{props.content}</div>
    )
}

export default Content;