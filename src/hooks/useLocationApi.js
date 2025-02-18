import { useState } from "react"
import axios from "axios"

const useLocationApi = () => {
    const [locationData, setLocationData] = useState([])
    const [locationIsLoading, setLocationIsLoading] = useState(true)
    const [locationError, setLocationError] = useState(false)

    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${import.meta.env.VITE_LOCATION_API_KEY}`
    const timeOut = 50000

    async function getLocationData() {
        try{
            const response = await axios.get(url, {timeout : timeOut})
            const data = response.data
            setLocationData(data)
            setLocationIsLoading(false)
        } catch(error) {
            console.error(error)
            setLocationError(error)
        }
    }

    return {locationData, locationIsLoading, locationError, getLocationData}
}

export default useLocationApi