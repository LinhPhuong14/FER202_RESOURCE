import { useState, useEffect } from "react"
import { instance } from "../utils"

const useFetch = (url) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState()
    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                if (!res.ok) throw new Error(res.statusText)
                setData(res.data)
                setErr(null)
            } catch (err) {
                setErr(err)
                console.log(err)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [url])

    return { data, isLoading, err }
}

export default useFetch
