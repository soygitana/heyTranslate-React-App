import React, { Component } from "react";
import "../styles/main.scss";
import VendorPanel from './vendorpanel.jsx';

// creating Comparison (includes: VendorPanel) component which is rendering vendor comparison section of the app 


class Comparison extends Component {
    render() {
        return (
            <>
                <VendorPanel />
            </>
        )
    }
}
export default Comparison;