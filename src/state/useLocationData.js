import { create } from "zustand";
import axios from "axios";
import stablishTime from "../utils/stablisTime";
import stablihTimeOfTheDay from "../utils/stablishTimeOfTheDay";

const useLocationData = create((set, get) => ({
    data: null,
    error: null,
    isLoading: true,
    time: null,
    timeOfTheDay: null,
    getData: async () => {

        const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${import.meta.env.VITE_LOCATION_API_KEY}`
        const timeOut = 50000

        try{
            const response = await axios.get(url, {timeout : timeOut})
            const data = response.data
            set((state) => ({ 
                data,
                isLoading: false,
                time: stablishTime(data),
                timeOfTheDay: stablihTimeOfTheDay(state.time)
             }))
        } catch(error) {
            console.error(error)
            set(() => ({ error }))
        }
    },
}))

export default useLocationData