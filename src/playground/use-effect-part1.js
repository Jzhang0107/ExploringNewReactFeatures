import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const NoteApp = () =>
{
    const notesData = JSON.parse(localStorage.getItem('notes'));

    const [notes, setNotes] = useState(notesData ? notesData : []);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteBody, setNoteBody] = useState('');

    const addNotes = (e) =>
    {
        e.preventDefault();


        setNotes([
            ...notes, 
            {
                noteTitle: noteTitle,
                noteBody: noteBody
            }
        ]);

        setNoteTitle('');
        setNoteBody('');
    }

    const removeNote = (noteToRemove) =>
    {
        setNotes(notes.filter((note) => note.noteTitle !== noteToRemove));
    }

    useEffect(() =>
    {
        localStorage.setItem('notes', JSON.stringify(notes))
    })

    return(
        <div>
            <h1>Lists</h1>
            {notes.map((note) => (
                <div key={note.noteTitle}>
                    <h3>{note.noteTitle}</h3>
                    <p>{note.noteBody}</p>
                    <button onClick={() => removeNote(note.noteTitle)}>Remove</button>
                </div>
            ))}
            <form onSubmit={addNotes}>
                <input placeholder='Note Title' value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
                <br />
                <textarea placeholder='Body' value={noteBody} onChange={(e) => setNoteBody(e.target.value)} />
                <button>Add item</button>
            </form>
        </div>
    )
}

ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();