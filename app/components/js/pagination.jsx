import React, { Component } from "react";
import "../styles/main.scss";

class Pagination extends Component {
  clickHandler = (page) => {
    console.clear();
    console.log(`clicked`, this.props.page);
    if (page > 4) {
      this.props.changePage(1);
    } else if (page < 1) {
      this.props.changePage(4);
    } else {
      this.props.changePage(page);
    }
  };

  render() {
    return (
      <>
        <div className="app-container col-12">
          <div className="app-controlers">
            {/* <h2>{this.props.page}</h2> */}
            <button
              className="app-button"
              onClick={(e) => {
                this.clickHandler(this.props.page - 1);
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="app-button"
              onClick={(e) => {
                this.clickHandler(this.props.page + 1);
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Pagination;
