import React from "react";
import { useState } from "react";


export default function CreateArea({ onAdd} ) {

    const [note, setNote] =useState({
        title: "",
        content: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setNote(preValue => {
            return {
                ...preValue, 
                [name]: value,
            }
        });
    }

    function submitButton(event) {
        onAdd(note);
        event.preventDefault(); 
        // ^^^ So that the entire page doesn't refresh
        setNote({
            title: "",
            content: "",
        })

    }

    return(
        <div>
            <form>
                <input value={note.title} type="text" placeholder="Title" name="title" onChange={handleChange}/>
                <p>
                    <textarea value={note.content} name="content" placeholder="New Note" onChange={handleChange} ></textarea>
                </p>
                <button className="btn btn-success" onClick={submitButton}>Submit</button>
            </form>
        </div>
    );
}