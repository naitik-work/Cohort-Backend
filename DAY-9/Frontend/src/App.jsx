import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react';
const App = () => {

  const [notes, setNotes] = useState([]);
  console.log("Hello integration!")

  function fetchNotes(){
      axios.get('https://cohort-backend-yfoq.onrender.com/api/notes')
      .then((res)=>{
      setNotes(res.data.notes); 
      })
  }
  
  useEffect(()=>{
    fetchNotes();
  },[])

  function handleSubmit(e){
    e.preventDefault() //page ko reload hone se rokega

    const {title,description}= e.target.elements //html tag of twon input tags

    console.log(title.value,description.value);
    
    //Creating notes at the server from frontend using axios.
    axios.post('https://cohort-backend-yfoq.onrender.com/api/notes', {
      title: title.value,
      description: description.value
    })
    .then((res)=>{
      console.log(res.data);
      fetchNotes();
    })

  }

  //Function for Deleting any note.

  function handleDeleteNote(noteId){
    console.log(noteId);
    axios.delete("https://cohort-backend-yfoq.onrender.com/api/notes/"+noteId)
    .then((res)=>{
      console.log(res.data);
      fetchNotes()
    })
  }

  function handleUpdateNote(noteId){
    console.log(noteId);
    
    const newTitle= prompt("Enter new title:");
    const newDescription= prompt("Enter new description:");
    
    //checking if either of the fields are empty!
    if (!newTitle || !newDescription) return alert("Both fields required!");

    axios.patch('https://cohort-backend-yfoq.onrender.com/api/notes/'+noteId,{
      title: newTitle,
      description: newDescription
    })
    .then((res)=>{
      console.log(res.data);
      fetchNotes();
    })
  }


  return (
    <>

    <form className='note-create-form' onSubmit={handleSubmit}>
      <input name='title' type="text" placeholder='Enter title' />
      <input name='description' type="text" placeholder='Enter description' />
      <button>Create note</button>
    </form>


    <div className="notes">
      {
        notes.map((note,id)=>{
        return <div key={id} className="note">
                  <h1>{note.title}</h1>
                  <p>{note.description}</p>
                  <div className='buttons'>
                          <button className='delete' onClick={()=>{handleDeleteNote(note._id)}}>Delete</button>
                          <button className='update'onClick={()=>{handleUpdateNote(note._id)}}>Update</button>
                  </div>

               </div>
        })
      }
    </div>
    </>
  )
}

export default App
