import React, {Component} from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";




function Navbar() {
    return (
        <nav>
            <h3> Avi Mancillas</h3>
            <ul className="nav-menu">
                <Link to= '/AboutMe'>
                <li>AboutMe</li>
                </Link>
                <Link to='/Languages'>
                <li>Languages</li>
                </Link>
            </ul>
        </nav>
    )
}



export default Navbar;