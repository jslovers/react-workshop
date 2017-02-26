import React, {Component} from 'react';
import Content from './content-page';

export default class Application extends Component {
    render()
    {
        return (
            <div>
                <h3>Hi Friends, I am component with state less component as child.</h3>
                <div><Content/></div>
            </div>
        )
    }
}