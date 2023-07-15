import React from 'react'

export const FindUsers = ({ findPerson, handleFilterPerson }: any) => {
    return (
        <>
            Filtrar:
            <form >
                <input value={findPerson} onChange={handleFilterPerson} />
            </form>
        </>
    )
}
