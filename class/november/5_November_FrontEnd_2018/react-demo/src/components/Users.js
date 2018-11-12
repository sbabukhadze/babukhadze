import React from 'react';

const Users = (props) => {
    const data = props.data.slice(0, props.length)
    return (
        <div>
            {
                data.map(user => (
                    <div key={user.id}>
                        <h2>Users {user.name}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default Users