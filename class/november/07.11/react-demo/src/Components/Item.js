import React from "react";

const Item = props => (
  <div className="result">
    <h1>Title: {props.data.title}</h1>
    <h2>Author: {props.data.author}</h2>
    <h3>Created At:{props.data.created_at} </h3>
    <p>
      <a href={props.data.url}>Link To </a>
    </p>
    <h2>Points</h2>
  </div>
);

export default Item;
