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
    constructor(props) {
        super(props)
        this.state = {
           isToggleOn: true
        };
        this.textHandler = this.textHandler.bind(this);
      }

      textHandler() {
		this.setState(function(prevState) {
			return {isToggleOn: !prevState.isToggleOn};
		});
	}
	
    
    render() {
        return (
            <Link to="/comparison" className="app-button" onClick={this.textHandler}>{this.state.isToggleOn ? 'vendor comparison' : 'vendor database'}</Link>
        )
    }
}

export default Button;