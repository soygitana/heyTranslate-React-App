import React, { Component } from "react";
import Panel from './panel.jsx'
import "../styles/main.scss";
import axios from 'axios'

// creating Searchbar component (includes Panel component with searched data) which is rendering search engine and handling data fetching and input event

class Searchbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      results: []
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  // creating function searchHandler for onChange event in input, changing state query to input value

  searchHandler(event) {
    this.setState({
      query: event.target.value
    })
  }

  // fetching data with axios from local db

  componentDidMount() {
    axios.get('http://localhost:3000/data')
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
    console.log(this.state.query)
    console.log(this.state.results)
    const { query } = this.state.query;
    return (
      <>
        <form className="app-searchbar">
          <div className="app-container">
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input type="text" className="form-control" placeholder="enter a vendor name, lastname or language"
                onChange={this.searchHandler} value={query}
              />
            </div>
          </div>
        </form>
        <Panel results={this.state.results} query={this.state.query} />
      </>
    )
  }
}

export default Searchbar;