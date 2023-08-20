import React from "react";
import "./styles.css";

export default function Note({ title, content, onDelete, id }) {
    return(
        <div className="note">
            <h1>{title}</h1>
            <hr></hr>
            <p>{content}</p>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(id)} > X </button>
        </div>
    )
}