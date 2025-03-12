import axios from "axios"

const useCityDetailsApi = () => {

    async function getCityDetailData(id) {

        const options = {
            method: 'GET',
            url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${id}`,
            headers: {
                'x-rapidapi-key': `${import.meta.env.VITE_RAPIDAPI_KEY}`,
                'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
            },
            timeout: 5000
        }
        try {
            const response = await axios.request(options)
            const data = response.data
            return data
        } catch(error) {
            console.error(error)
        }
    }

    return {getCityDetailData}
}

export default useCityDetailsApi