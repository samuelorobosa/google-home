import React, {Component} from 'react';
import './SearchField.css'

class SearchField extends Component {
    render() {
        return (
            <div className="SearchFieldRoot">
                <i className="fas fa-search search-icon"></i>
                <input type="text" className="search-input" onChange={this.props.searchChange}/>
                <i className="fas fa-microphone mic-icon"></i>

                <div className="buttons">
                    <button>Google Search</button>
                    <button>I'm Feeling Lucky</button>
                </div>

                <p className="searchfieldBottomtext">
                    Google offered in:
                    <p>Hausa</p>
                    <p>Igbo</p>
                    <p>Ede Yoruba</p>
                    <p>Nigerian Pidgin</p>
                </p>
            </div>
        );
    }
}

export default SearchField;