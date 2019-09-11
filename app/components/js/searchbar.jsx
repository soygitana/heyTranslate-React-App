import React, { Component } from "react";
import Panel from './panel.jsx'
import "../styles/main.scss";
import axios from 'axios'


class Searchbar extends Component {
  state = {
    query: '',
    results: []
  };


  getInfo = () => {
    axios.get('http://localhost:4000/data')
      .then(resp => {
        const data = resp.data;
        this.setState({
          results: data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }




  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      }
    })
  }



  render() {

    return (
      <form className="app-searchbar">
        <div className="app-container">
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control" placeholder="find by vendor name" ref={input => this.search = input}
              onChange={this.handleInputChange} />
          </div>
        </div>
        <Panel results={this.state.results} />
      </form>
    )
  }
}

export default Searchbar;