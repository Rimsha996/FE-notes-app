function NotesBlock(props){
    return(
        <div>
            <h4>{props.note.title}</h4>
            <div>{props.note.details}</div>
        </div>
    )
}

export default NotesBlock;