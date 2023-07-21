import React from 'react'

export const FindUsers = ({ findPerson, handleFilterPerson }: any) => {
    return (
        <>
            Filter:
            <form >
                <input value={findPerson} onChange={handleFilterPerson} />
            </form>
        </>
    )
}
