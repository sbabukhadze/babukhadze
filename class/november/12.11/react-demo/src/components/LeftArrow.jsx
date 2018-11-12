import React from "react";

const LeftArrow = props => {
  return (
    <div className="Back_arrow arrow" onClick={props.prevSlide}>
      <i className="fas fa-arrow-left" />
    </div>
  );
};

export default LeftArrow;
