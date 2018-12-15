import React, { Component } from 'react';
import ExtraFooter from '../extraFooter';
import Sidebar from '../sidebar';
import Slider from '../slider';
import HomePageProduct from '../homePageProduct';

class Index extends Component {
  render() {
    return (
      <div className="index">
        <Sidebar />

        <div className="right-side">
          <Slider />

          <HomePageProduct />
        </div>

        <ExtraFooter />
      </div>
    );
  }
}

export default Index;
