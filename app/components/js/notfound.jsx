import React, { Component } from "react";
import "../styles/main.scss";

class NotFound extends Component {
    render() {
        return (
            <>
            <div className="app-error">
             <h1>404</h1>
             <h2>oops! nothing was found</h2>
             </div>
            </>
        )
    }
}

export default NotFound;