import Header from './components/header';
import Footer from './components/footer';
import NotesInput from './components/notes-input';
import NotesList from './components/notes-list';

import { useEffect, useState } from 'react';
function App() {
  const [notesList, setNoteList] = useState([]);

  useEffect(()=>{
    setNotes()
  }, [])

  function setNotes(){
    fetch('https://rose-bluefish-garb.cyclic.app/note')
    .then(response => response.json())
    .then(data => setNoteList(data.notes))
  }
  function AddNote(newNote){
    fetch('https://rose-bluefish-garb.cyclic.app/note', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newNote)
    }).then(res =>res.json())
    .then(res=>{
      console.log(res);
      if(res)
        setNotes()
    });
    console.log(newNote)
  };

  return (
    <div className="App">
      
      <Header/>
      <NotesInput addNote={AddNote}/>
      <NotesList notesList={notesList}/>
      <Footer />
    </div>
  );
}

export default App;
