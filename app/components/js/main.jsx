import React, { Component } from "react";
import "../styles/main.scss";
import Searchbar from './searchbar.jsx';

// creating Main (includes: Header, Searchbar and Footer components) component which is rendering main page of the app 

class Main extends Component {
    render() {
        return (
            <>
                <Searchbar />
            </>
        )
    }
}

export default Main;