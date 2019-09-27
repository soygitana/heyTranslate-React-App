import React, { Component } from "react";
import "../styles/main.scss";
import Header from './header.jsx';
import Footer from './footer.jsx';

// creating Comparison (includes: Header, VendorBox and Footer components) component which is rendering vendor comparison section of the app 


class VendorBox extends Component {
    render() {
        return (
            <div className="app-container col-12">
              <div className="app-vendorbox">
              </div>
            </div>
          )
    }
}


class VendorPanel extends Component {
    render() {
        return (
            <div className="app-container col-12">
              <div className="app-vendorpanel">
              <VendorBox />
              <VendorBox />
              <VendorBox />
              </div>
            </div>
          )
    }
}


class Comparison extends Component {
    render() {
        return (
            <>
                <Header />
                <VendorPanel />
                <Footer />
            </>
        )
    }
}

export default Comparison;