import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                        <NavLink className="navbar-brand" to="/">Start Bootstrap</NavLink>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/sample_post">Sample Post</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;