import React from 'react';
import _ from 'lodash';
import {Link} from 'react-router';

const Listing = (props) => {
    return (
        <ul>{_
                .map(props.list, function (item, index) {
                    return <li key={index}>
                        <Link to={'somepage/' + item}>{item}</Link>
                    </li>
                })
}</ul>
    );
}
export default Listing;
