import React from 'react';
import { Link } from 'react-router'

class Routes extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/AboutMe">About Me</Link></li>
                </ul>
            </div>
        )
    }
}

export default Routes;