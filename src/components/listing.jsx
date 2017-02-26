import React, {Component} from 'react';
import _ from 'lodash';

export default class Listing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            someValue: 'someValue'
        };
    }

    componentDidMount() {
        this.setState({someValue: 'otherValue'});
        this.state.someValue = "anotherValue";
    }

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