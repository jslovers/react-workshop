import React, {Component} from 'react';

export default class Listing extends Component {

    constructor() {
        super();
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
            <div>
                <h3>{this.state.someValue}</h3>
            </div>
        )
    }
}