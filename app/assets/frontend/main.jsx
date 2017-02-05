import React from 'react';
import { render } from 'react-dom';
import Index from './components/Index';
import Follow from './components/Follow';


import {hashHistory, Router, Route, IndexRoute, Link} from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
let documentReady = () => {
    let reactNode = document.getElementById('react');
    if (reactNode) {
        render(
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Index}/>
                    <Route path="follow" component={Follow}/>
                </Route>
            </Router>
            , reactNode);
    }
};

$(documentReady);