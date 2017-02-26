import React, {Component} from 'react';
import _ from 'lodash';

export default class Listing extends Component {

    render()
        {
            return (
                <ul>
                    {_.map(this.props.list, function(item, index){
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            )
        }
}