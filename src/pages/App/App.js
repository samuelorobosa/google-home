/**
 * Created By Samuel Orobosa Amagbakhen
 * amagbakhensamuel@gmail.com
 */
import './App.css';
import Navbar from "../../components/Navbar/Navbar";
import PageLogo from "../../components/PageLogo/PageLogo";
import SearchField from "../../components/SearchField/SearchField";
import Footer from "../../components/Footer/Footer";
import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            inputText: "",
        }
    }

    onSearchChange = (event) =>{
        this.setState({
            inputText : event.target.value
        })
    }
    render() {
        return (
            <div className="App">
                <Navbar/>
                <PageLogo inputText={this.state.inputText}/>
                <SearchField searchChange={this.onSearchChange} />
                <Footer/>
            </div>
        );
    }
}

export default App;
