import { FormEvent, useEffect, useState } from 'react'
import axios from 'axios'

import noteService from './components/NoteComponent/Services/notesServices'
import { Note } from './components/NoteComponent/Note/Note'
import { Notification } from './components/Notifications/Notification'
import { Footer } from './components/FooterComponent/Footer'


function App() {

  const [notes, setNotes] = useState<any>([
    // initial notes array
  ]);
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")

  const loadData = () => {
    noteService.getAll()
      .then((initialNotes: any) => {
        setNotes(initialNotes)
      })
  }

  useEffect(loadData, [])
  console.log('render', notes.length, 'notes')



  //SHOW NOTES
  const notesToShow = showAll
    ? notes
    : notes.filter((note: any) => note.important === true)

  //SAVE NOTE DATA SERVER. 
  const addNote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const noteObject: any = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    
    axios
    noteService.create(noteObject)
      .then((returnedNote: any) => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
        console.log(returnedNote)
      })
  }

  //UPDATE IMPORTANCE NOTE
  const toggleImportanceOf = (id: number) => {

    const note = notes.find((n: Note) => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService.update(id, changedNote)
      .then((returnedNote: any) => {
        setNotes(notes.map((note: Note) => note.id !== id ? note : returnedNote))
      }).catch(error => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage("")
        }, 5000)
        setNotes(notes.filter((n: Note) => n.id !== id))
      })
  }

  const handleNoteChange = (event: any) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }



  return (
    <>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <span data-cy="title">{newNote}</span>
      <div>
        <button data-cy="show" onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {
          notesToShow.map(({ id, content }: any) => {
            return <Note
              key={id}
              content={content}
              toggleImportance={() => toggleImportanceOf(id)}
            ></Note>
          })
        }
      </ul>

      <form onSubmit={addNote}>
        <input data-cy="newNoteinput" value={newNote} onChange={handleNoteChange} />
        <button data-cy="save" type="submit">SAVE</button>
      </form>
      <Footer />
    </>
  )
}

export default App
