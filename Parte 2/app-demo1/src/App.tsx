import { useState } from 'react'
import { Note } from './components/Note'


function App() {

  const [note, setNotes] = useState([
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
  ])

  return (
    <>
      <ul>
        {
          note.map(({ id, content }) => {
            return <Note key={id} content={content} ></Note>
          })
        }
      </ul>
    </>
  )
}

export default App
