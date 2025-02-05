import { useState } from "react"
import axios from "axios"

const useTimezoneApi = (timeZone) => {
    const [timeZoneData, setTimeZoneData] = useState([])
    const [isTimeZoneLoading, setIsTimeZoneLoading] = useState(false)
    const [timeZoneError, setTimeZoneError] = useState(false)

    
    async function getTimeZoneData(urlParams) {
        const url = `https://api.ipgeolocation.io/timezone?apiKey=${import.meta.env.VITE_LOCATION_API_KEY}&tz=${urlParams}`
        const timeOut = 50000
        try {
            const response = await axios.get(url, {timeout: timeOut})
            const data = response.data
            setTimeZoneData(data)
            setIsTimeZoneLoading(true)
        } catch (error) {
            setTimeZoneError(error)
            console.error(error)
        }
    }
    return {timeZoneData, isTimeZoneLoading, timeZoneError, getTimeZoneData}
}

export default useTimezoneApi