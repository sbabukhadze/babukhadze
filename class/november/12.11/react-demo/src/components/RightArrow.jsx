import React from "react"

const RigthArrow = (props) => {
    return(
        <div className="Back_arrow arrow" onClick={props.nextSlide}>
        <i className= "fas fa-arrow-rigth"></i>

        </div>
    )
}

export default RigthArrow