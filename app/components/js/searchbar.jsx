import React, { Component } from "react";
import "../styles/main.scss";


class Searchbar extends Component {  

    render() {
        return (
          <div className="app-searchbar">
          <div className="container">
          <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control" placeholder="find by vendor name" />
  </div>
          </div>
          </div>
        )
    }
}

export default Searchbar;