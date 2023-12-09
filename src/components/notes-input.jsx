import { useState } from "react";
function NotesInput(props){
    const [title, setTitle] = useState();
    const [details , setDetails ] = useState();

    function AddNotes(){
        props.addNote({
            title,
            details
        })
    }
    return <div>
        <div>
            <label for="title">Title {title} </label>
            <input id="title" type="text" placeholder="Enter Title" value={title} onChange={(event)=> setTitle(event.target.value)} />
        </div>
       <div>
            <label for="details">Details</label>
            <textarea placeholder="Enter Details" value={details} onChange={(event)=> setDetails(event.target.value)}></textarea>
       </div>
        <button onClick={()=>AddNotes()} >Save</button>
    </div>
}

export default NotesInput;