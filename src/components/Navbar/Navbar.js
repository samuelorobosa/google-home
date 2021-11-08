import React, {Component} from 'react';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                    <p>
                        Gmail
                    </p>
                    <p>
                        Images
                    </p>
                    <p>
                        <i className="fas fa-th"></i>
                    </p>
                    <p className="nameBio">
                         TD
                    </p>
            </nav>
        );
    }
}

export default Navbar;
