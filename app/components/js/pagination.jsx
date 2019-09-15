import React, { Component } from "react";
import "../styles/main.scss";

// creating Pagination component (part of Searchbar component) which is handling pages changing events 

class Pagination extends Component {
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    }

    // creating function clickHandler for onClick event on buttons, changing pages

    clickHandler(page) {
        console.clear();
        console.log(`clicked`, this.props.page);
        if (page > 3) {
            this.props.changePage(1);
        } else
            if (page < 1) {
                this.props.changePage(3);
            } else {
                this.props.changePage(page);
            }
    }

    render() {
        return (
            <>
                <div className="app-container">
                    <div class="app-controlers">
                        {/* <h2>{this.props.page}</h2> */}
                        <button className="app-button" onClick={(e) => { this.clickHandler(this.props.page - 1); }}><i className="fas fa-chevron-left"></i></button>
                        <button className="app-button" onClick={(e) => { this.clickHandler(this.props.page + 1) }}><i className="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </>
        )
    }
}

export default Pagination;
