import React from 'react'

export const Note = ({ content,toggleImportance }: any) => {

    const label = content.important
    ? 'make not important' : 'make important'

    return (
        <>
        <li>{content}</li>
        <button onClick={toggleImportance}>{label}</button>
        </>
    )
}
