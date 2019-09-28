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
        return (
            <Link to={this.props.isToggleOn ? "/comparison" : "/"} className="app-button" onClick={this.props.changeStatus}>{this.props.isToggleOn ? 'vendor comparison' : 'vendor database'}</Link>
        )
    }
}

export default Button;