function NotesBlock(props){
    return(
        <div id= {props.note._id} className="flex flex-col w-[300px] h-[300px] m-6 p-2 justify-center items-center bg-gray-200
        shadow-lg rounded-2xl">
            <h4>{props.note.title}</h4>
            <div>{props.note.details}</div>
        </div>
    )
}

export default NotesBlock;