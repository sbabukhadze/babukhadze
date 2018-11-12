import React from 'react';

const Comments = (props) => {
    const data = props.data.slice(0, props.length)
    return (
        <div>
            {
                data.map(comment => (
                    <div key={comment.id}>
                        <h2>Users {comment.email}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments