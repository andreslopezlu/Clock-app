import { useState } from "react"
import axios from "axios"

const useCitiesApi = () => {
    const [citiesData, setCitiesData] = useState([])
    const [citiesIsLoading, setCitiesIsLoading] = useState(true)
    const [citiesError, setCitiesError] = useState(false)

    async function getCitiesData(name, offset=0) {

        const options = {
            method: 'GET',
            url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
            params: {
                namePrefix: name,
                offset: offset
            },
            headers: {
                'x-rapidapi-key': `${import.meta.env.VITE_RAPIDAPI_KEY}`,
                'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
            },
            timeout: 5000
        }
        try {
            const response = await axios.request(options)
            const data = response.data
            setCitiesData(data)
            setCitiesIsLoading(false)
            console.log(data)
        } catch(error) {
            setCitiesError(error)
        }
    }

    return {citiesData, citiesIsLoading, citiesError, getCitiesData}
}

export default useCitiesApi