import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, hashHistory} from 'react-router';
import Application from '../src/components/application';
import Somepage from '../src/components/somepage';

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={Application}>
        <Route path="/somepage/:page" component={Somepage}></Route>
    </Route>
    
</Router>, document.getElementById('react-application'));