import React, { Component } from 'react'
import "../styles/main.scss";

// creating SearchingFor function to filtr data by name, lastname, language

function SearchingFor(query) {
  return function (x) {
    return x.name.toLowerCase().includes(query.toLowerCase()) ||
      x.lastname.toLowerCase().includes(query.toLowerCase()) ||
      x.language.toLowerCase().includes(query.toLowerCase()) ||
      !query;
  }
}

// creating Panel component which is rendering searched suggestions in 

class Panel extends Component {
  render() {
    const results = this.props.results
    const query = this.props.query
    return (
      <div className="app-container">
        <div className="app-panel">
          {
            results.filter(SearchingFor(query)).map(result =>
              <ul key={result.id}>
                <li>{result.name} {result.lastname} {result.language}</li>
              </ul>
            )
          }
        </div>
      </div>
    )
  }
}

export default Panel;

