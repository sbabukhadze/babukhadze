import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
  // Link,
} from 'react-router-dom';
import Index from './components/pages/index';
import IndexProduct from "./components/pages/indexProduct"


import './assets/css/main.css';
import 'antd/dist/antd.css';

import Footer from './components/footer';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/product" component={IndexProduct}/>
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}
