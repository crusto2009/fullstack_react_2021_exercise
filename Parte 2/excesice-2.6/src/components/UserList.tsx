import React from 'react'
import { UserListtems } from './UserListtems'

export const UserList = ({persons}:any) => {
    return (
        <>
            <h2>Numbers</h2>
            <ul>
                {
                    persons.map((person: any) => {                        
                        return <UserListtems name={person.name}></UserListtems>
                    })
                }
            </ul>
        </>
    )
}
