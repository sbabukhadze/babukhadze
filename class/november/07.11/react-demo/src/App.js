import React, { Component } from "react";
import "./App.css";
import Loader from "./Components/Loader";
import Search from "./Components/Search";
import List from "./Components/List";

const url = "https://hn.algolia.com/api/v1/search?query=";
class App extends Component {
  state = {
    query: "javascript",
    url,
    data: null,
    isLoading: true,
  };

  componentDidMount(){
    fetch( `${url}${this.state.query}`)
    .then( data => data.json())
    .then( data => {
      this.setState( {data, isLoading: false})
    })
    .catch(err => console.log(err))
  }

  onSearchHandler(e){
    this.setState ( { query: e.target.value});
  } 


onSumbit = (e) => {
  e.preventDefault();
  const query = e.target.children.searchText.value;
  this.setState({ query});
}

  render() {
    return (
      <div className="wrapper">
        <Search onSearchHandler={this.onSearchHandler} 
        onSumbit={this.onSumbit}
          />
        {this.state.isLoading && <Loader/>}
        {!this.state.isLoading && 
          <List  data={this.state.data.hits}  limit={10}/>
        }
             
      </div>
    );
  }
}

export default App;
