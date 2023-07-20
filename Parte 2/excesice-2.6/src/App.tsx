import { useEffect, useState } from 'react'
import './App.css'
import { UserList } from './components/UserList'
import { FormUsers } from './components/FormUsers'
import { FindUsers } from './components/FindUsers'
import UserService from './components/Services/UserService'




function App() {

  const person: any[] = [];
  const [persons, setPersons] = useState(person)
  const [newName, setNewName] = useState('')
  const [findPerson, setFindPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {

    UserService.getAll()
      .then((Users: any) => {
        setPersons(Users)
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
      const person = {
        name: newName,
        number: newNumber
      }

      UserService.create(person)
        .then((Newcontact: any) => {
          console.log(Newcontact)
          setPersons(persons.concat(Newcontact))
          setNewName('')
          setNewNumber('')
        })

     
     
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
