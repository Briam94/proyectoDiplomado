import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    <li>
                    <Link to="/"> Home </Link>
                    </li>
                    <li>
                    <Link to="/retos"> Retos </Link>
                    </li>
                    <li>
                    <Link to="/jugadores"> Jugadores </Link>
                    </li>
                </ul>                
            </nav>
        )
    }
}