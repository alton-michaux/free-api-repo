import React, { useState } from 'react'

export const ApiFetch = ({ id, title, fetchUrl }) => {
    const [fetchResponse, setFetchResponse] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleFetch = async () => {
        setIsLoading(true)
        const res = await fetch(fetchUrl);
        const data = await res.json();
        const jsonPretty = JSON.stringify(data, null, 2)
        setIsLoading(false)
        setFetchResponse(jsonPretty)
    }

    return (
        <div className="api-div" id={id}>
            <h2>{title}</h2>
            {isLoading ?
                <>
                    <p>Loading...</p>
                </> :
                <>
                    <button onClick={() => { handleFetch() }}>Fetch</button>
                    <pre>{fetchResponse}</pre>
                </>
            }
        </div>
    )
}
