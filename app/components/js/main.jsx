import React, { Component } from "react";
import "../styles/main.scss";
import Header from './header.jsx';
import Searchbar from './searchbar.jsx';
import Footer from './footer.jsx';

// creating Main (includes: Header, Searchbar and Footer components) component which is rendering main page of the app 

class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <Searchbar />
                <Footer />
            </>
        )
    }
}

export default Main;