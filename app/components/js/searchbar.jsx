import React, { Component } from "react";
import "../styles/main.scss";


class Searchbar extends Component {
    render() {
        return (
          <input type="text" placeholder="Search..." class="field" />
        )
    }
}

export default Searchbar;