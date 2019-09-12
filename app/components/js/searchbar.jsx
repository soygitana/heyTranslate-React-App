import React, { Component } from "react";
// import Panel from './panel.jsx'
import "../styles/main.scss";
import axios from 'axios'
import FilterResults from 'react-filter-search';



// const Panel = (props) => {
//   const options = props.results.map(result => (
//     <li key={result.id}>
//       {result.name} {result.lastname} {result.language}
//     </li>
//   ))
//   return (
//     <div className="app-container">
//       <div className="app-panel">
//         <ul>{options}</ul>
//       </div>
//     </div>
//   )
// }



function SearchingFor(query) {
  return function (x) {
    return x.name.toLowerCase().includes(query.toLowerCase()) ||
      x.lastname.toLowerCase().includes(query.toLowerCase()) ||
      x.language.toLowerCase().includes(query.toLowerCase()) ||
      !query;
  }
}



class Searchbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      results: []
    };
    this.searchHandler = this.searchHandler.bind(this);

  }


  searchHandler(event) {
    this.setState({
      query: event.target.value
    })
  }


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
    console.log(this.state.query)
    console.log(this.state.results)
    const { results, query } = this.state;
    return (
      <>
        <form className="app-searchbar">
          <div className="app-container">
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input type="text" className="form-control" placeholder="find by vendor name"
                onChange={this.searchHandler} value={query}

              />
            </div>
          </div>
        </form>
        {/* <Panel results={this.state.results} /> */}
        <div className="app-container">
          <div className="app-panel">
            {results.filter(SearchingFor(query)).map(result =>
              <ul key={result.id}>
                <li>{result.name} {result.lastname} {result.language}</li>
              </ul>
            )
            }
          </div>
        </div>
      </>
    )
  }
}

export default Searchbar;