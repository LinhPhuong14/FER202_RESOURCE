import React, { useState, useEffect } from "react"
import { instance } from "../utils"

const useFetch = (url) => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const res = await instance.get(url)
                if (!res.ok) throw new Error(res.statusText)
                const json = await res.json()
                setIsLoading(false)
                setData(json)
                setError(null)
            } catch (error) {
                setIsLoading(false)
                setError("${error} Could not fetch Data")
            }
        }

        fetchData()
    }, [url])
    return { data, error, isLoading }
}
export default useFetch
