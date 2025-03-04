import { useRef } from "react"
import axios from "axios"

const useFlagApi = () => {

    const flagData = useRef()

    async function getFlagData(params) {

        const options = {
            method: 'GET',
            url: `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${params?.length ? params : ''}`,
            headers: {
              'x-rapidapi-key': `${import.meta.env.VITE_RAPIDAPI_KEY}`,
              'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
            },
            timeout: 5000
        };
        try {
            const response = await axios.request(options)
            const data = response.data
            flagData.current = data.flagImageUri
        } catch(error) {
            console.error(error)
        }
    }

    return {flagData, getFlagData}
}

export default useFlagApi