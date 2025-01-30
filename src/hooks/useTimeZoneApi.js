import { useState } from "react"
import axios from "axios"

const useTimezoneApi = () => {
    const [locationData, setLocationData] = useState([])
    const [locationIsLoading, setLocationIsLoading] = useState(true)
    const [locationError, setLocationError] = useState(false)

    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${import.meta.env.VITE_LOCATION_API_KEY}`
    const timeOut = 50000

    async function getLocationData(urlParams) {
        try{
            const response = await axios.get(url, {timeout : timeOut})
            const data = response.data
            console.log(data)
            setLocationData(data)
            setLocationIsLoading(false)
        } catch(error) {
            console.log(error)
            setLocationError(error)
        }
    }

    return {locationData, locationIsLoading, locationError, getLocationData}
}

export default useTimezoneApi