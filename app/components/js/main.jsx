import React, { Component } from "react";
import "../styles/main.scss";
import Header from './header.jsx';
import Searchbar from './searchbar.jsx';
import Footer from './footer.jsx';

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