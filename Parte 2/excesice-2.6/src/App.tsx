import { useEffect, useState } from 'react'
import './App.css'
import { UserList } from './components/UserList'
import { FormUsers } from './components/FormUsers'
import { FindUsers } from './components/FindUsers'

import axios from 'axios'


function App() {
  const person: any[] = [];
  const [persons, setPersons] = useState(person)
  const [newName, setNewName] = useState('')
  const [findPerson, setFindPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3000/notes')
      .then((response) => {
        setPersons(response.data)
      })

  }, [])


  const handleFilterPerson = (event: any) => {
    setFindPerson(event.target.value)
  }

  const showPersons = () => {
    return findPerson === '' ? persons : persons.filter((person) => {
      return person.name.includes(findPerson)
    })
  }


  const handleChangeName = (event: any) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event: any) => {
    setNewNumber(event.target.value)
  }

  const handleAddPerson = (event: any) => {
    event.preventDefault()
    const find = persons.some((persona) => {
      return persona.name === newName
    })
    if (find) {
      alert(`${newName}, "Ya se encuentra registrado.`)
    } else {
      setPersons(persons.concat(
        {
          name: newName,
          number: newNumber
        }))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <FindUsers findPerson={findPerson} handleFilterPerson={handleFilterPerson} />
        <hr />
        <FormUsers newName={newName} newNumber={newNumber} handleAddPerson={handleAddPerson} handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber}></FormUsers>
        <UserList persons={showPersons()}></UserList>
      </div>
    </>
  )
}

export default App
