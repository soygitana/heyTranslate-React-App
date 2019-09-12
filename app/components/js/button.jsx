import React, { Component } from "react";
import "../styles/main.scss";

// creating Button component (part of the Header component) 

class Button extends Component {
    render() {
        const text = this.props.text
        return (
            <button className="app-button">{text}</button>
        )
    }
}

export default Button;