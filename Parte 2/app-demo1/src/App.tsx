import { FormEvent, useState } from 'react'
import { Note } from './components/Note'

function App() {
  const [note, setNotes] = useState([
    // initial notes array
  ]);
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)
  /* const [note, setNotes] = useState([
    {
      id: 1,
      content: 'HTML is easy',
      date: '2019-05-30T17:30:31.098Z',
      important: true,
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      date: '2019-05-30T18:39:34.091Z',
      important: false,
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      date: '2019-05-30T19:20:14.298Z',
      important: true,
    },
  ]) */

  const notesToShow = showAll
    ? note
    : note.filter((note: any) => note.important === true)

  const addNote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const noteObject: any = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: note.length + 1,
    }


    setNotes(note.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event: any) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <>
    <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {
          notesToShow.map(({ id, content }) => {
            return <Note key={id} content={content} ></Note>
          })
        }
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">SAVE</button>
      </form>
    </>
  )
}

export default App
