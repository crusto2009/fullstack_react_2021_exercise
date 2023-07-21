import React from 'react'

export const Notification = ({ message,type }: any) => {

    if (message === "null") {
        return null
    }

    return (
        <div className={type=="error"?"error":"success"}>
            {message}
        </div>
    )
}
