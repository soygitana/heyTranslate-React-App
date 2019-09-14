import React, { Component } from "react";
import "../styles/main.scss";


class Pagination extends Component {
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(page) {
        console.log(`clicked`)
        this.props.changePage(page);
    }

    render() {
        return (
            <>
                <div className="app-container">
                    <div class="app-controlers">
                        {/* <h2>{this.props.page}</h2> */}
                        <button className="app-button" onClick={(e) => { this.clickHandler(1); }}><i className="fas fa-chevron-left"></i></button>
                        <button className="app-button" onClick={(e) => { this.clickHandler(2); }}><i className="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </>
        )
    }
}

export default Pagination;
