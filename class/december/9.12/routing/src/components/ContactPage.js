import React from "react";

export const ContactPage = props => {
    return (
        <div className="contact">
            <h1 className="contact--title">{props.title}</h1>
            <p>
            {props.desc}
        </p>
        </div>
    )
}