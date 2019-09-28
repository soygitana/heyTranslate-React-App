import React, { Component } from "react";
import "../styles/main.scss";
import VendorBox from './vendorbox.jsx';


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

export default VendorPanel;
