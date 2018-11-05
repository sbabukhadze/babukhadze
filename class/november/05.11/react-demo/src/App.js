import React, { Component } from 'react';
import './App.css';
import { api as API } from "./configs/api"
import Photos from "./components/Photos"
import Users from "./components/Users"
import Components from "./components/Components"


// const url = API.baseURL + API.photos
const url = API.baseURL + API.users

class App extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    fetch(url)
      .then(data => data.json())
      .then(data => this.setState({ data }))
      .catch(err => err.message)

  }


  render() {
    return (
      <div className="App">
        {/* <header >
          {
            (!!this.state.data && url.endsWith(API.photos)) && <Photos length={5} data={this.state.data} />
          }

          {
            (!!this.state.data && url.endsWith(API.users)) && <Users length={5} data={this.state.data} />
          }
        </header> */}
        <imageList/>
      </div>
    );
  }
}

export default App;
