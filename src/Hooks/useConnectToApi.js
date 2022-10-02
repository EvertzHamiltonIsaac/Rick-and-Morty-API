import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const useConnectToApi = (URL, search) => {

    const [response, setResponse] = useState()
    const [error, setError] = useState(false)

    useEffect(() => {

        axios.get(URL)
            .then(res => {
                setError(false)
                setResponse(res.data)
            })

            .catch(err => setError(true))
    }, [search])

    return { response, error }
}

export default useConnectToApi