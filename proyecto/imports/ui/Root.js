import React, { Component } from 'react';
import App from './App';
import Header from './Header';
import Home from './Home';
import About from './Retos';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class Root extends Component {
    render() {
        return (
            <Router>
                <div id="container" >
                    <Header />
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/jugadores" component={App}></Route>
                    <Route exact path="/retos" component={About}></Route>
                    <Route path="/about/:saludo" component={About}></Route>
                </div>
            </Router>
        )
    }
}