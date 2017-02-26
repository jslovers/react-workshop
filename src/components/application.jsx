import React, {Component} from 'react';
import Content from './content-page';

export default class Application extends Component {
    render()
    {   
        const lorem = "Lorem ipsum";
        const content = `${lorem} dolor sit amet, consectetur adipiscing elit. Duis congue facilisis
            orci. Integer nulla neque, egestas at condimentum nec, interdum et dolor. Cras
            vulputate, elit at vulputate eleifend, dolor turpis consectetur justo,`

        return (
            <div>
                <h3>Hi Friends, I am component with state less component as child.</h3>
                <div><Content fontSize={18} content={content}/></div>
            </div>
        )
    }
}