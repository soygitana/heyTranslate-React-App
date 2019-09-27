import React, { Component } from "react";
import "../styles/main.scss";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

// creating Button component (part of the Header component) 

class Button extends Component {
    render() {
        const text = this.props.text
        return (
            <Link to="/comparison" className="app-button">{text}</Link>
        )
    }
}

export default Button;