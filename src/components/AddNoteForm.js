import React, {useState, useContext} from 'react';
import NotesContext from '../context/notes-context';

const AddNoteForm = () =>
{
    const [noteTitle, setNoteTitle] = useState('');
    const [noteBody, setNoteBody] = useState('');
    const {notesDispatch} = useContext(NotesContext);

    const addNotes = (e) =>
    {
        e.preventDefault();

        notesDispatch({type: 'addNote', noteTitle: noteTitle, noteBody: noteBody})

        setNoteTitle('');
        setNoteBody('');
    }

    return (
        <div>
            <form onSubmit={addNotes}>
                <input placeholder='Note Title' value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
                <br />
                <textarea placeholder='Body' value={noteBody} onChange={(e) => setNoteBody(e.target.value)} />
                <button>Add item</button>
            </form>
        </div>
    )
}

export {AddNoteForm as default};