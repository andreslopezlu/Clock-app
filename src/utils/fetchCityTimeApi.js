import axios from "axios"

const fetchCityTimeApi = () => {

    async function getCityTime(id) {

        const options = {
            method: 'GET',
            url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${id}/time`,
            headers: {
              'x-rapidapi-key': `${import.meta.env.VITE_RAPIDAPI_KEY}`,
              'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
            }
        }

        try {
            const response = await axios.request(options)
            const data = response.data
            return data
        } catch(error) {
            console.error(error)
        }
    }

    return {getCityTime}
}

export default fetchCityTimeApi