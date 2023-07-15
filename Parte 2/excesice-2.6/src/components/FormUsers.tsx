import React from 'react'

export const FormUsers = ({newName,handleAddPerson,handleChange}:any) => {
  return (
    <>
     <form onSubmit={handleAddPerson}>
          <div>
            name: <input value={newName} onChange={handleChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form> 
    </>
  )
}
