import React, { Component } from "react";
import Panel from './panel.jsx'
import "../styles/main.scss";
import axios from 'axios'


class Searchbar extends Component {
  state = {
    query: '',
    results: []
  };


  componentDidMount() {
    axios.get('http://localhost:4000/data')
    .then(res => {
          console.log(res);
          this.setState({
            results: res.data
          })
      })
      .catch(error => {
        console.log(error);
      });
  }





  render() {

    return (
      <form className="app-searchbar">
        <div className="app-container">
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control" placeholder="find by vendor name" />
          </div>
        </div>
        <Panel results={this.state.results} />
      </form>
    )
  }
}

export default Searchbar;