import { useState } from "react";

import fetchCityDetailsApi from "../utils/fetchCityDetailsApi";

import { FAVORITES_DATA_LOCAL_STORAGE } from "../utils/constants";

const useCityDetailsData = () => {
    const [favoritesData, setFavoritesData] = useState([])
    const {getCityDetailData} = fetchCityDetailsApi()
    const delay = 2000

    async function fetchFavoritesData(ids) {
        let result = []

        for (const i in ids){
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    const completed = true
                    completed ? resolve('ok') : reject('no')
                }, delay)
            })
            try {
                const item = await getCityDetailData(ids[i])  
                result.push(item)
            } catch(error) {
                console.error(error)
            }
        }

        localStorage.setItem(FAVORITES_DATA_LOCAL_STORAGE, JSON.stringify(result));
        setFavoritesData(result)
    }

    function getFavorites() {
        const favorites = JSON.parse(localStorage.getItem(FAVORITES_DATA_LOCAL_STORAGE)) || []
        return favorites
    }

    return {favoritesData, fetchFavoritesData, getFavorites}
}

export default useCityDetailsData