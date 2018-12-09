import React, { Component } from 'react';
import './App.css';

export const inc = (prev) => {
  return {
    value: prev.value + 1
  } 
}

export const dec = (prev) => {
  return {
    value: prev.value - 1
  } 
}

export const Value = ({value}) =>  <h3>{ value }</h3>;

class App extends Component {
  constructor(){
    super()

    this.state = {
      value: 0
    }

    this.onDec = this.onDec.bind(this);
  }

  OnInc = () => {
    this.setState( inc )
  }

  onDec() {
    this.setState( dec )
  }

  render() {
    return (
      <div className="App">
        <h2>TDD Demo</h2>
        <Value value={this.state.value}/>
        <button type="button" onClick={this.OnInc}>Inc +</button>
        <button type="button" onClick={this.onDec}>Dec -</button>
      </div>
    );
  }
}

export default App;
