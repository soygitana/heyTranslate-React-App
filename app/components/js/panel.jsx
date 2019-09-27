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
      <div className="app-container col-12">
        <div className="app-panel">
          {
            results.filter(SearchingFor(query)).map(result =>
              <ul key={result.id} className="app-list">
                <li className="app-list-element">
                  <div className="app-card">

                    <div className="card-wrap">
                      <img src={result.image} className="img-fluid" alt=""></img>
                      <div className="card-mask">
                        <h2>{result.name} {result.lastname}</h2>
                        <h3>{result.language}</h3>
                        <ul className="card-skills-list">
                          <li>{result.service1}</li>
                          <li>{result.service2}</li>
                          <li>{result.service3}</li>
                        </ul>
                        <div className="card-social">
                          <a href="#"><i className="fas fa-envelope"></i></a>
                          <a href="#"><i className="fas fa-phone"></i></a>
                          <a href="#"><i className="fab fa-linkedin"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                </li>
              </ul>
            )
          }
        </div>
      </div>
    )
  }
}

export default Panel;

