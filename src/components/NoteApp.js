import React, {useEffect, useReducer} from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context';

const NoteApp = () =>
{
    const [notes, notesDispatch] = useReducer(notesReducer, [])

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
        <NotesContext.Provider value={{notes, notesDispatch}}>
            <h1>Lists</h1>
            <NoteList />
            <br />
            <AddNoteForm />
        </NotesContext.Provider>
    )
}

export {NoteApp as default};