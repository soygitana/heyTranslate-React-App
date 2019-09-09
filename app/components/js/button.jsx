import React, { Component } from "react";

class Button extends Component {
    render() {
        const text = this.props.text
        return (
           <button className="app-button">{text}</button>
        )
    }
}

export default Button;