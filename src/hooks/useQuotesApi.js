import { useState } from "react"
import axios from "axios"

const useQuotesApi = () => {
    const [quotesData, setQuotesData] = useState([])
    const [quotesIsLoading, setQuotesIsLoading] = useState(true)
    const [quotesError, setQuotesError] = useState(false)

    const url = `https://api.api-ninjas.com/v1/quotes?X-Api-Key=${import.meta.env.VITE_NINJA_APIS_KEY}`
    const timeOut = 50000

    async function getQuotesData() {
        try {
            const response = await axios.get(url, {timeOut : timeOut})
            const data = response.data[0]
            setQuotesData(data)
            setQuotesIsLoading(false)
        } catch(error) {
            console.error(error)
            setQuotesError(error)
        }
    }

    return {quotesData, quotesIsLoading, quotesError, getQuotesData}
}

export default useQuotesApi