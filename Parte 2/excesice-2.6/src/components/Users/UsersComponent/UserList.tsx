import React from 'react'
import { UserListtems } from './UserListtems'

export const UserList = ({persons,handleDeleteUser}:any) => {
    return (
        <>
            <h1>Person list</h1>
            <ul>
                {
                    persons.map((person: any) => {                        
                        return <UserListtems key={person.name} name={person.name} phone={person.number}>
                            <button onClick={() => handleDeleteUser(person.id)}>Delete</button>
                        </UserListtems>
                    })
                }
            </ul>
        </>
    )
}
