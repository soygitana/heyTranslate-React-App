import React, { Component } from "react";
import Panel from "./panel.jsx";
import Pagination from "./pagination.jsx";
import "../styles/main.scss";
import axios from "axios";

class Searchbar extends Component {
  state = {
    query: "",
    results: [],
    page: 1,
    data: [],
  };

  searchHandler = (event) => {
    let results = this.state.data;
    let output = [];

    for (let key in results) {
      let element = results[key];
      for (let key2 in element) {
        let element2 = element[key2];
        output.push(element2);
      }
    }

    this.setState({
      query: event.target.value,
      results: output,
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/data")
      .then((res) => {
        console.log(res.data["page" + this.state.page]);
        this.setState({
          data: res.data,
          results: res.data["page" + this.state.page],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changePage = (page) => {
    this.setState({
      data: this.state.data,
      results: this.state.data["page" + page],
      page: page,
    });
  };

  render() {
    console.log(this.state.query);
    console.log(this.state.data);
    const { query } = this.state.query;
    return (
      <>
        <form className="app-searchbar">
          <div className="app-container col-12">
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control"
                placeholder="enter a vendor name, lastname or language"
                onChange={this.searchHandler}
                value={query}
              />
            </div>
          </div>
        </form>
        <Pagination changePage={this.changePage} page={this.state.page} />
        <Panel results={this.state.results} query={this.state.query} />
      </>
    );
  }
}

export default Searchbar;
