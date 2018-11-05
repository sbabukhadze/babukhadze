import React from "react";

const  Photos = (props) => {
    const data = props.data.slice(0, props.length)
    return(
        <div>
            {
                data.map(photos=> (
                    <div key={photos.id}>
                        <h2>Photo Title {photos.title}</h2>
                    </div>
                ))
            }
           
        </div>
    )
}

export default Photos