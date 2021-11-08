import React, {Component} from 'react';
import logo from '../../assets/logo.png';
import './PageLogo.css'

class PageLogo extends Component {
    render() {
        return (
            <div className="logoContainer">
                {this.props.inputText ? this.props.inputText: <img src={logo} alt="pageLogo"/>}
            </div>

        );
    }
}

export default PageLogo;