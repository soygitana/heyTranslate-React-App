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
import Footer from './footer.jsx';

// creating main App component which is rendering my app :)

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