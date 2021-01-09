import React from 'react';

const Note = ({note, removeNote}) => 
{
    return(
        <div style={{border: 'solid', margin: '10px', padding: '10px'}}>
            <h3>{note.noteTitle}</h3>
            <p>{note.noteBody}</p>
            <button onClick={() => removeNote(note.noteTitle)}>Remove</button>
        </div>
    )
}

export {Note as default};