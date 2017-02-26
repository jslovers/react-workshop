import React from 'react';
import _ from 'lodash';
import {Link} from 'react-router';

const Listing = (props) => {
    return (
        <ul>{_
                .map(props.list, function (item, index) {
                    return <li
                        onClick={() => {
                        props.clickHandler(item)
                    }}
                        key={index}>
                        {item}
                    </li>
                })
}</ul>
    );
}

export default Listing;
