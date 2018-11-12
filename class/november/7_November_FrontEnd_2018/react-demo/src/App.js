import React, { Component } from 'react';
import './App.css';
import Loader from './Components/Loader';
import Search from './Components/Search';
import List from './Components/List';

const url = 'https://hn.algolia.com/api/v1/search?query='
class App extends Component {
  state = {
    query: 'javascript',
    url,
    data: null,
    isLoading: true,
  }
  componentDidMount() {
    fetch( `${url}${this.state.query}` )
      .then( data => data.json() )
      .then( data => this.setState( {data, isLoading: false}  ))
      .catch(err => console.log(err))
  }
  onSubmit = (e) => {
    e.preventDefault();
    const query = e.target.children.searchText.value;
    this.setState({ query, isLoading: true });
  }
  componentDidUpdate() {
    fetch( `${url}${this.state.query}` )
      .then( data => data.json() )
      .then( data => this.setState( {data, isLoading: false}  ))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="wrapper">
        <Search onSubmit={this.onSubmit} />
        { this.state.isLoading && <Loader /> }
        { !this.state.isLoading && <List limit={10} data={this.state.data.hits} /> }
      </div>
    );
  }
}

export default App;
