import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from  "react-router-dom";
import {ProtectedRoute} from "./routes/ProtectedRoute";

import Data from "./db/data.json";

import {IndexPage} from "./components/IndexPage";
import LoginPage from "./components/LoginPage";
import {ProfilePage} from "./components/ProfilePage";
import {ContactPage} from "./components/ContactPage";
import './App.css';


class App extends Component {
  state = {
    showLogin: true
  }
  render() {
    return (
      <Router>
      <div className="App">
        
        <ul className="menu">
          <li className="menu--item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu--item">
            <Link to="/contact">Contact</Link>
          </li>
          {this.state.showLogin && (
                <li className="menu--item">
                <Link to="/login">Login</Link>
              </li>
          )}
          {!this.state.showLogin && (
            <li className="menu--item">
            <Link to="/profile">Profile</Link>
          </li>

          )
          }
      

        </ul>

        <Route path="/" exact render={ () => ( <IndexPage title={Data.index.title} desc={Data.index.desc}/> )} />
        <Route path="/contact" render={ () => ( <ContactPage title={Data.contact.title} desc={Data.contact.desc}/> )}/>
        <Route path="/login" component={LoginPage}/>
        <ProtectedRoute path="/profile" component={ProfilePage}/>

        </div>
      </Router>
    );
  }
}

export default App;
