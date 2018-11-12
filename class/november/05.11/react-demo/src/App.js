import React, { Component } from 'react';
import './App.css';
import {api as API} from './configs/api';
import Photos from './components/Photos';
import Users from './components/Users';
import Comments from './components/Comments';
import ImageList from './components/ImageList';

const url = API.baseURL + API.comments;
class App extends Component {
  state = {
    data: null
  }
  componentDidMount(){
    fetch(url)
      .then(data => data.json())
      .then(data => this.setState({data}))
      .catch(err => err.message)
  }
  render() {
    return (
      <div className="App">
        {/* {
          (!!this.state.data && url.endsWith(API.photos)) && <Photos length={5} data={this.state.data} />
        }
        {
          (!!this.state.data && url.endsWith(API.users)) && <Users length={5} data={this.state.data} />
        }
        {
          (!!this.state.data && url.endsWith(API.comments)) && <Comments length={5} data={this.state.data} />
        } */}

        <ImageList url={url}/>
      </div>
    );
  }
}

export default App;
