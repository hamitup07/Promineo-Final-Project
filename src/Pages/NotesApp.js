import React, { Component } from "react";
import "../Components/styles.css";
import CreateArea from "../Components/CreateArea";
import Note from "../Components/Note";
import { useState, useEffect } from "react";

// A Notes app, similar to Google Keep, using Local storage to store an array of notes. Uses CreateArea and Note components.
// Notes can be created and deleted, and they persist using local storage.

export default function Notes() {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");
        if (savedNotes) {
            return JSON.parse(savedNotes);
        } else {
            return [];
        }
        });
    

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    // Function to add a new note:

    function addNote(newNote) {
        setNotes((preValue) => {
            return [...preValue, newNote];
        });
        console.log(notes);
    }

    // Function to delete a note, using the finter method:

    function deleteNotes(id) {
        setNotes(preValue => {
            return [...preValue.filter((note, index) => index !== id)];
        });
    }

    return (
        <div className="App">
            <CreateArea onAdd={addNote} />
            {notes.map((note, index) => (
                <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNotes} />
            )) }
        </div>
    );
}