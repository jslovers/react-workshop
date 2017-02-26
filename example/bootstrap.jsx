import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, hashHistory} from 'react-router';
import Application from '../src/components/application';

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={Application}></Route>
</Router>, document.getElementById('react-application'));