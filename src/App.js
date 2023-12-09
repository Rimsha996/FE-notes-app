import Header from './components/header';
import Footer from './components/footer';
import NotesInput from './components/notes-input';
import NotesList from './components/notes-list';

import { useState } from 'react';
function App() {
  const [notesList, setNoteList] = useState([]);

  
  // [
  //   {
  //     id: '_aaaaa',
  //     title: 'Note 1',
  //     details: 'This is my first note',
  //   },
  //   {
  //     id: '_bbbbb',
  //     title: 'Note 2',
  //     details: 'This is my second note',
  //   }
  // ];

  function AddNote(newNote){
    // let temp = notesList
    console.log(notesList)
    setNoteList([...notesList , newNote])
    // notesList.push(newNote);
  }
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
