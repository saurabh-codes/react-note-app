import React, { useState } from 'react'
import Note from './Note'
import { v4 as uuidv4 } from 'uuid';

function Home() {
    const [notes, setNotes] = useState([]);

    const addNewNotes = (elm) => {
        const newNotes = [...notes, elm];
        newNotes.filter((note) => !note.id && (note.id = uuidv4()))
        setNotes(newNotes);
        console.log(newNotes);
    }

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id))
    }

    const cardColor = [
        "card-color-1",
        "card-color-2",
        "card-color-3",
        "card-color-4",
        "card-color-5",
    ];

    const randomColor = () => {
        const random = Math.floor(Math.random() * cardColor.length);
        return cardColor[random];
    }

    return (
        <div className='container'>
            <div className='btn-container'>
                <button onClick={addNewNotes} className='btn'>+ New Note</button>
            </div>

            <div className='border'></div>

            <div className='note-container'>
                {notes.map((note) => (<Note key={note.id} note={note} onClick={deleteNote} cardBg={randomColor}/>))}
            </div>
        </div>
    )
}

export default Home