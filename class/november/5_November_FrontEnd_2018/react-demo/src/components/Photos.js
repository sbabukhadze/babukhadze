import React from 'react';

const Photos = (props) => {
    const data = props.data.slice(0, props.length)
    return (
        <div>
            {
                data.map(photo => (
                    <div key={photo.id}>
                        <h2>Photo Title {photo.title}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default Photos