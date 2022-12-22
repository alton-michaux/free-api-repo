import React, { useState } from 'react'

export const ApiFetch = ({ title, fetchUrl }) => {
    const [fetchResponse, setFetchResponse] = useState(null)

    const handleFetch = async () => {
        const res = await fetch(fetchUrl)
        const data = await res.json();
        const jsonPretty = JSON.stringify(data,null,2)
        setFetchResponse(jsonPretty)
    }

    return (
        <div className="api-div">
            <h1>{title}</h1>
            <button onClick={() => { handleFetch()}}>Fetch</button>
            <pre>{fetchResponse}</pre>
        </div>
    )
}
