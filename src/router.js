import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';
import index from './pages/index/index';

export default class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/" component={index} />
                </App>
            </HashRouter>
        )
    }
}