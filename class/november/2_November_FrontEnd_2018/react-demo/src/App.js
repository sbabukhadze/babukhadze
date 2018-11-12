import React, { Component } from 'react';
import {username} from './Play';
import developer from './Play';
// import {username as firstname, lastname} from './Play';
import Counter from './Counter'
import './App.css';


function SaySomething(props){
    return <p>{props.text}</p>
}
const styles = {color: 'red', padding: '30px', border:'2px dashed black'};
const FooComponent = (props) => {
  return (
    <div style={{...styles}}>
        <p>{props.text}</p>
    </div>
  )
}

class App extends Component {
  randomText(){
    return `Random Text - ${developer.username} ${developer.lastname}`;
  }
  render(){
    return (
      <div>
        <h1>Hello World...</h1>
        <h2>{ this.randomText() }</h2>
        <SaySomething text="Lorem ipsum dolar sit amet." />
        <FooComponent text="Lorem ipsum dolar sit amet." />
        <hr/>
        <div  style={{...styles}}>
          <Counter/>
        </div>
      </div>
    )
  }
}

export default App;
