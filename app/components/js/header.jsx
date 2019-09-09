import React, { Component } from "react";
import "../styles/main.scss";
import Logo from "./logo.jsx"
import Button from "./button.jsx"

class Header extends Component {
    render() {
        return (
       <div className="app-header">
           <div className="container">
           <Logo/>
           <Button text='vendor comparison'/>
           </div>
       </div>
        )
    }
}

export default Header;