import React, { Component } from "react";
import "../styles/main.scss";
import Header from './header.jsx';
import Footer from './footer.jsx';

// creating Comparison (includes: Header, VendorBox and Footer components) component which is rendering vendor comparison section of the app 

class Comparison extends Component {
    render() {
        return (
            <>
                <Header />
                <Footer />
            </>
        )
    }
}

export default Comparison;