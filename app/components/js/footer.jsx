import React, { Component } from "react";
import "../styles/main.scss";

// creating Footer component which is rendering app footer 

class Footer extends Component {
    render() {
        return (
            <div className="app-footer">
                <p>© I am Paula. All rights reserved. 2019</p>
                <p>Made by soygitana in Poland</p>
            </div>
        )
    }
}

export default Footer;