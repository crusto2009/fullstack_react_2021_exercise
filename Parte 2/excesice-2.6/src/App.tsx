import { useState } from 'react'
import './App.css'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleChange = (event: any) => {
    setNewName(event.target.value)
  }

  const handleAddPerson = (event: any) => {
    event.preventDefault()
    setPersons(persons.concat({ name: newName }))
    setNewName('')
  }

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={handleAddPerson}>
          <div>
            name: <input value={newName} onChange={handleChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <ul>
        {
          persons.map((person: any) => {
            return <li key={person.name}>{person.name}</li>
          })
        }
        </ul>
      </div>
    </>
  )
}

export default App
