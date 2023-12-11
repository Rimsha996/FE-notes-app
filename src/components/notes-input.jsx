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
    return <div className="w-full">
        <div className="flex justify-center items-center h-12">
            <label className="pr-10 font-bold text-gray-600" htmlFor="title">Title: </label>
            <input className="rounded-[2px] border border-gray-200 p-1 w-[25%]" id="title" type="text" placeholder="Enter Title" value={title} onChange={(event)=> setTitle(event.target.value)} />
        </div>
       <div className="flex justify-center items-center h-12">
            <label className="pr-5 font-bold text-gray-600" htmlFor="details">Details:</label>
            <textarea className="rounded-[2px] border border-gray-200 p-1 w-[25%]" placeholder="Enter Details" value={details} onChange={(event)=> setDetails(event.target.value)}></textarea>
       </div>

       <div className='flex justify-center p-4'>
        <button onClick={()=>AddNotes()} 
            className='flex justify-center border border-blue-700 bg-blue-800 w-2/12 text-white rounded-[3px]'>Save</button>
       </div>
    </div>
}

export default NotesInput;