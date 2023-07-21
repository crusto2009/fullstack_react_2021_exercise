import React from 'react'

export const FormUsers = ({ newName, newNumber, handleAddPerson, handleChangeName, handleChangeNumber }: any) => {
    return (
        <>
            <form onSubmit={handleAddPerson}>
                <div>
                    name: <input value={newName} onChange={handleChangeName} />
                </div>
                <div>
                    phone-number: <input value={newNumber} onChange={handleChangeNumber} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}
