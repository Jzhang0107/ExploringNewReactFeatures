const notesReducer = (state, action) =>
{
    switch(action.type)
    {
        default:
            return state

        case 'populateNotes':
            return action.notes
        
        case 'addNote':
            return [
                ...state,
                {
                    noteTitle: action.noteTitle,
                    noteBody: action.noteBody
                }
            ]

        case 'removeNote':
            return state.filter((note) => note.noteTitle !== action.noteTitle)
    }
}

export {notesReducer as default};