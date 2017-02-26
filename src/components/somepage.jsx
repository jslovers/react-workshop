import React from 'react';

const Somepage = (props) => {

    return (
        <div>{props.params.pagename}</div>
    )
}

export default Somepage;