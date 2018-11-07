import React from "react";
import Item from "./Item";

const List = props => (
  <div className="results">
    {props.data.map( (post, index) => (
        <Item key={index} data={post}/>
    ))}
    <Item />
  </div>
);

export default List;
