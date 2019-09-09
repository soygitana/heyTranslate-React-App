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
import Searchbar from './searchbar.jsx';
import Social from './social.jsx';
import Footer from './footer.jsx';


class App extends Component {
    render() {
        return (
            <>
            <Header />
            <Searchbar />
            <Footer />
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)