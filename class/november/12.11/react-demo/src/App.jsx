import React, { Component } from 'react';
import Slide from "./components/Slide";
import LeftArrow from "./components/LeftArrow"
import RightArrow from "./components/RightArrow"

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        images: [],
        currentSlide: 0,
        translateValue: 0,
      
    }
  }

  prevSlide = () => {

  }
  nextSlide = () => {

  }


  render() {
    return (
      <div className="slider">
      <div className="slider_container"
      style={{
        transofrm: `translateX(${this.state.translateValue}px`,
        transition: "transform ease-in-out 0.45s",
      }}>
      {
        this.state.images.map( (image, index) =>  <Slide key={index} image={image}/>
        )}

      </div>
      <LeftArrow prevSlide={this.LeftArrow}/>
      <RightArrow nextlide={this.RightArrow}/>
      </div>
        
     
    );
  }
}

export default App;
