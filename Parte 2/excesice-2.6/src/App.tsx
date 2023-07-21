import { useEffect, useState } from 'react'
import './App.css'
import { UserList } from './components/Users/UsersComponent/UserList'
import { FormUsers } from './components/Users/UsersComponent/FormUsers'
import { FindUsers } from './components/Users/UsersComponent/FindUsers'
import UserService from './components/Users/UsersComponent/Services/UserService'
import { Person } from './components/Users/UsersComponent/Interfaces/UserInterface'
import { Notification } from './components/Users/Notification/Notification'




function App() {
  const [persons, setPersons] = useState<Person[]>([])
  const [newName, setNewName] = useState('')
  const [findPerson, setFindPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState("")
  const [errorType, setErrorType] = useState("")

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

      const person = persons.find(person => person.name === newName)
      const changedUserInfo = { ...person, number: newNumber }

      if (window.confirm(`${newName}, "Ya se encuentra registrado, desea actualizar la información.`)) {
        UserService.update(person?.id, changedUserInfo)
          .then((updateContact: any) => {
            setPersons(persons.map(person => person.name !== newName ? person : updateContact))
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            setErrorType("error")
            showMessage(`Information person '${person?.name}', has remove to server.`)
          })
      }

    } else {
      const person = {
        name: newName,
        number: newNumber
      }

      UserService.create(person)
        .then((Newcontact: any) => {
          setPersons(persons.concat(Newcontact))
          setErrorType("success")
          showMessage(`Add ${person.name}`)
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          setErrorType("error")
          showMessage("Error create user")
        })
    }
  }


  const showMessage = (message: String) => {

    setMessage(
      `${message}`
    )
    setTimeout(() => {
      setErrorType("")
      setMessage("")
    }, 5000)
  }

  const handleDeleteUser = (id: any) => {
    if (window.confirm("Seguro desea eliminar el usuario?")) {
      UserService.remove(id)
        .then((response: any) => {
          setPersons(persons.filter((person) => person.id != id))
        })
        .catch(error => {
          setErrorType("error")
          showMessage(`Information person '${id}', has remove to server.`)
        })
    }
  }

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <FindUsers findPerson={findPerson} handleFilterPerson={handleFilterPerson} />
        <hr />
        <FormUsers newName={newName} newNumber={newNumber} handleAddPerson={handleAddPerson} handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber} />
        {message && <Notification message={message} type={errorType} />}
        <UserList persons={showPersons()} handleDeleteUser={handleDeleteUser} />
      </div>
    </>
  )
}

export default App
