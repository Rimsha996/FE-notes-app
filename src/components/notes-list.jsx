import NotesBlock from "./notes-block"

function NotesList(props){
    return(<div>
        {props.notesList.map((n)=>{
            return <NotesBlock note={n} />
        })}

    </div>)
}

export default NotesList;