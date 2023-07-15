import { useState } from 'react'
import './App.css'
import { UserList } from './components/UserList'
import { FormUsers } from './components/FormUsers'

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
    const find = persons.some((persona) => {
      return persona.name === newName
    })
    if (find) {
      alert(`${newName}, "Ya se encuentra registrado.`)
    } else {
      setPersons(persons.concat({ name: newName }))
      setNewName('')
    }
  }

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <FormUsers newName={newName} handleAddPerson={handleAddPerson} handleChange={handleChange}></FormUsers>
        {/* <form onSubmit={handleAddPerson}>
          <div>
            name: <input value={newName} onChange={handleChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form> */}
        <UserList persons={persons}></UserList>
      </div>
    </>
  )
}

export default App
