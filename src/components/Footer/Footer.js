import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p className="countryP">Nigeria</p>
                <div className="bottomFooter">
                    <p>Settings</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </div>
        );
    }
}

export default Footer;