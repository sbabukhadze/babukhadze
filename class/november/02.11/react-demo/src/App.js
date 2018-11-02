import React, { Component } from 'react';
// import {username, lastname} from "./Play"   //destruqtturingi

// import * as person from "./Play"  // username  da  lastname  gadmova  obieqtad

// import {username as firstname, lastname} from "./Play"


import developer from "./Play"  //obieqtis  exportistvis

import './App.css';


function SaySomething(props){  //roca  ar mchirdeba mdogmareobis  cvlilebaze  damokidebuli renderi
  return <p>{props.text}</p>
}

const FooComponent = (props) =>{
  return (
    <div style={{color: "red", padding: "30px", border: "2px dashed black"}}>
      <p>{props.text}</p>
    </div>
  )
}


class App extends Component {
  randomText() {
    // return  `Random Text : ${username}  ${lastname}` ;
    // return  `Random Text : ${person.username}  ${person.lastname}` ;
    // return  `Random Text : ${firstname}  ${person.lastname}` ;
    return  `Random Text : ${developer.username}  ${developer.lastname}` ;
  }

  render() {
    return (
      <div>
        <h1>Hello World..</h1>
        <h2>{this.randomText()}</h2>
        <SaySomething text="say something"/>
        <FooComponent text= "say something again"/>
      </div>

    );
  }
}


export default App;