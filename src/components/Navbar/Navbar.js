import React, {Component} from 'react';
import {Items} from "./Items";
import './Navbar.css';




class Navbar extends Component{
    state = {clicked:false}
    
    handleClick = () => {
        this.setState({ clicked:!this.state.clicked})
    }

    render() {
        return(
            
            <nav className="NavbarMenu">
                <h1 className="navbar-logo">Avi Mancillas</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}> 
                    {Items.map((item,index) => {
                        return(
                            <li key = {index}>
                                <a className={item.cName} href={item.url}>
                                    {item.label}

                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            
        )
    }
}



export default Navbar;