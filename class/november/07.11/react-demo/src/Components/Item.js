import React from "react";

const Item = props => (
  <div class="result">
    <h1>Title: {props.post.title}</h1>
    <h2>Author</h2>
    <h3>Created At</h3>
    <p>
      <a href="#">Link To </a>
    </p>
    <h2>Points</h2>
  </div>
);

export default Item;
