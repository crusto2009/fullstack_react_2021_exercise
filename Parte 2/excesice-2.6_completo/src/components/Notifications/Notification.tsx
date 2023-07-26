import React from 'react'

export const Notification = ({ message }: any) => {
    if (message === "") {
        return null
    }

    return (
        <div className="error">
            {message}
        </div>
    )
}
