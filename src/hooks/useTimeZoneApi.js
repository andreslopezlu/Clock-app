import { useState } from "react"
import axios from "axios"

const useTimezoneApi = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    // const axios = require('axios').default;

    const url = "https://api.ipgeolocation.io/ipgeo?apiKey=a6329416c0f74f62932afe4ac1732502"
    const timeOut = 50000

    async function getData(urlParams) {
        try{
            const response = await axios.get(url, {timeout : timeOut})
            const data = response.data
            console.log(data)
            setData(data)
            setIsLoading(false)
        } catch(error) {
            console.log(error)
            setError(error)
        }
    }

    return {data, isLoading, error, getData}
}

export default useTimezoneApi