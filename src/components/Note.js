import React, {useContext} from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({note}) => 
{
    const {notesDispatch} = useContext(NotesContext);

    const position = useMousePosition();

    return(
        <div style={{border: 'solid', margin: '10px', padding: '10px'}}>
            <p>{position.x}, {position.y}</p>
            <h3>{note.noteTitle}</h3>
            <p>{note.noteBody}</p>
            <button onClick={() => notesDispatch({type: 'removeNote', noteTitle: note.noteTitle})}>Remove</button>
        </div>
    )
}

export {Note as default};