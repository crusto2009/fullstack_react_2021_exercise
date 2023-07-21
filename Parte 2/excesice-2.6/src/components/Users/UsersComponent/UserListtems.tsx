import React from 'react'

export const UserListtems = ({ name,phone,children }: any) => {
    return (
        <>
            <li className='note'>{name}-{phone} {children}</li>
        </>
    )
}
