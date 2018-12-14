import React, { Component } from 'react';
import ExtraFooter from '../extraFooter';
import Sidebar from '../sidebar';
import Slider from '../slider';
import Gallery from '../gallery';

class Index extends Component {
  render() {
    return (
      <div className="index">
        <Sidebar />

        <div className="right-side">
          <Slider />

          <Gallery />
        </div>

        <ExtraFooter />
      </div>
    );
  }
}

export default Index;
