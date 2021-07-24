import React, {Component} from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav>
            
            <h3>
                <Link to= '/'>Avi Mancillas</Link>
                
            </h3>
            <ul className="nav-menu">
                <Link to= '/AboutMe'>
                <li>AboutMe</li>
                </Link>
                <Link to='/Languages'>
                <li>Languages</li>
                </Link>
                <Link to='/Work'>
                <li>Work</li>
                </Link>
                <Link to='/Resume'>
                <li>Resume</li>
                </Link>
                <Link to='/ContactMe'>
                <li>ContactMe</li>
                </Link>
            </ul>
        </nav>
    )
}



export default Navbar;