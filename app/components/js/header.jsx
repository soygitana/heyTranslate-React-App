import React, { Component } from "react";
import "../styles/main.scss";
import Logo from "./logo.jsx";
import Button from "./button.jsx";

class Header extends Component {
  state = {
    isToggleOn: true,
  };

  changeStatus = () => {
    console.log(this.state.isToggleOn);
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
  };

  render() {
    return (
      <div className="app-header">
        <div className="app-container col-12">
          <Logo />
          <Button
            changeStatus={this.changeStatus}
            isToggleOn={this.state.isToggleOn}
          />
        </div>
      </div>
    );
  }
}

export default Header;
