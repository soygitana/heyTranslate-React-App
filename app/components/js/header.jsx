import React, { Component } from "react";
import "../styles/main.scss";
import Logo from "./logo.jsx"
import Button from "./button.jsx"

// creating Header component (includes: Logo and Button components) which is rendering app header 

class Header extends Component {
    render() {
        return (
            <div className="app-header">
                <div className="app-container col-12">
                    <Logo />
                    <Button text='vendor comparison' />
                </div>
            </div>
        )
    }
}

export default Header;