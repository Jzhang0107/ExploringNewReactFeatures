import React, {useEffect, useReducer} from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';

const NoteApp = () =>
{
    const [notes, notesDispatch] = useReducer(notesReducer, [])

    const removeNote = (noteToRemove) =>
    {
        console.log("Note removed", noteToRemove);
        notesDispatch({type: 'removeNote', noteTitle: noteToRemove});
    }

    // useEffect dependency, function only runs if variable change (tracked in array as second param)
    // if array is empty, function will only run once on load, otherwise can set to track a var
    useEffect(() => 
    {
        const notesData = JSON.parse(localStorage.getItem('notes'));

        notesDispatch({type: 'populateNotes', notes: notesData});
    }, [])

    useEffect(() =>
    {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return(
        <div>
            <h1>Lists</h1>
            <NoteList notes={notes} removeNote={removeNote} />
            <br />
            <AddNoteForm 
                notesDispatch={notesDispatch} 
            />
        </div>
    )
}

export {NoteApp as default};