import React from 'react';

const Item = (props) => (
    <div className="result">
        <h2>Title: {props.post.title}</h2>
        <h2>Author: {props.post.author}</h2>
        <h3>Created At: { new Date(props.post.created_at).toDateString() }</h3>
        <p><a href={props.post.url}>Link</a></p>
        <h4>Points: {props.post.points}</h4>
    </div>
);

export default Item;