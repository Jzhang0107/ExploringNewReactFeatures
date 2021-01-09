import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const NoteApp = () =>
{
    const [notes, setNotes] = useState([]);
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

    // useEffect dependency, function only runs if variable change (tracked in array as second param)
    // if array is empty, function will only run once on load, otherwise can set to track a var
    useEffect(() => 
    {
        const notesData = JSON.parse(localStorage.getItem('notes'));
        setNotes(notesData ? notesData : []);
        console.log("This only runs once");
    }, [])

    useEffect(() =>
    {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return(
        <div>
            <h1>Lists</h1>
            {notes.map((note) => (
                <Note 
                    key={note.noteTitle}
                    note={note}
                    removeNote={removeNote}
                />
            ))}
            <br />
            <form onSubmit={addNotes}>
                <input placeholder='Note Title' value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
                <br />
                <textarea placeholder='Body' value={noteBody} onChange={(e) => setNoteBody(e.target.value)} />
                <button>Add item</button>
            </form>
        </div>
    )
}

const Note = ({note, removeNote}) => 
{
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted');
        }
    }, [])

    return(
        <div style={{border: 'solid', margin: '10px', padding: '10px'}}>
            <h3>{note.noteTitle}</h3>
            <p>{note.noteBody}</p>
            <button onClick={() => removeNote(note.noteTitle)}>Remove</button>
        </div>
    )
}

ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();