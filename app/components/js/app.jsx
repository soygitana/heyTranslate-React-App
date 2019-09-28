import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';


import Main from './main.jsx'
import Comparison from './comparison.jsx'
import NotFound from './notfound.jsx'
import Header from './header.jsx';
import Footer from './footer.jsx';


// creating main App component which is rendering my app :)

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/comparison' component={Comparison} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)