import React, { Component } from "react";
import ReactDOM from "react-dom";
// import {
//     HashRouter,
//     Route,
//     Link,
//     Switch,
//     NavLink,
// } from 'react-router-dom';


import Header from './header.jsx';



class App extends Component {
    render() {
        return (
            <Header />
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)