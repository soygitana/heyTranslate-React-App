import React, { Component } from "react";
import "../styles/main.scss";
import Logo from "./logo.jsx"
import Button from "./button.jsx"

// creating Header component (includes: Logo and Button components) which is rendering app header 

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true
        };
        this.changeStatus = this.changeStatus.bind(this);
    }

    changeStatus() {
        console.log(this.state.isToggleOn);
        this.setState({
            isToggleOn: !this.state.isToggleOn
        });
    }

    render() {
        return (
            <div className="app-header">
                <div className="app-container col-12">
                    <Logo />
                    <Button changeStatus={this.changeStatus} isToggleOn={this.state.isToggleOn} />
                </div>
            </div>
        )
    }
}

export default Header;