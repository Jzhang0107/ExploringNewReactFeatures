import React, {useContext} from 'react';
import NotesContext from '../context/notes-context';

const Note = ({note}) => 
{
    const {notesDispatch} = useContext(NotesContext);

    return(
        <div style={{border: 'solid', margin: '10px', padding: '10px'}}>
            <h3>{note.noteTitle}</h3>
            <p>{note.noteBody}</p>
            <button onClick={() => notesDispatch({type: 'removeNote', noteTitle: note.noteTitle})}>Remove</button>
        </div>
    )
}

export {Note as default};