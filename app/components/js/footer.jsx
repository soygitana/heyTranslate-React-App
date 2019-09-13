import React, { Component } from "react";
import "../styles/main.scss";

// creating Footer component which is rendering app footer 

class Footer extends Component {
    render() {
        return (
            <div className="app-footer">
                <p>Built by @soygitana with <a href="https://reactjs.org/">React</a>. Data based on private information.
                 Source code available on <a href="https://github.com/soygitana">GitHib</a>.</p>
            </div>
        )
    }
}

export default Footer;



// <p>Built by @soygitana with React, Node.js and MongoDB. Data based on Wikipedia. Source code available on GitHub.</p>