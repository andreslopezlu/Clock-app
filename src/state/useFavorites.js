import { create } from "zustand"

import { FAVORITES_IDS_LOCAL_STORAGE, FAVORITES_DATA_LOCAL_STORAGE, FAVORITES_TIME_LOCAL_STORAGE } from "../utils/constants"

import fetchCityDetailsApi from "../utils/fetchCityDetailsApi"
import fetchCityTimeApi from "../utils/fetchCityTimeApi"

const useFavorites = create((set, get) => {

    const initialFavoritesIds = JSON.parse(localStorage.getItem(FAVORITES_IDS_LOCAL_STORAGE)) || []
    const initialTotal = initialFavoritesIds.length

    if(!localStorage.getItem(FAVORITES_IDS_LOCAL_STORAGE)) {
        localStorage.setItem(FAVORITES_IDS_LOCAL_STORAGE, JSON.stringify([]))
    }

    return {
        favoritesIds: initialFavoritesIds,
        totalFavorites: initialTotal,
        favoritesData: [],
        favoritesTime: [],
        saveDeleteFavoritesIds: (id) => {
            const favorites = JSON.parse(localStorage.getItem(FAVORITES_IDS_LOCAL_STORAGE))
            const favoriteIndex = favorites.indexOf(id)
            favorites.includes(id) ? favorites.splice(favoriteIndex, 1) : favorites.push(id)
            const total = favorites.length
            localStorage.setItem(FAVORITES_IDS_LOCAL_STORAGE, JSON.stringify(favorites));
            set(() => ({
                favoritesIds: favorites,
                totalFavorites: total
            }))
        },
        saveDeleteFavoritesData: async () => {
            const ids = get().favoritesIds
            const {getCityDetailData} = fetchCityDetailsApi()

            let result = []
            const delay = 1500

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

            set(() => ({
                favoritesData: result
            }))
        },
        getFavoritesData: () => {
            const result = JSON.parse(localStorage.getItem(FAVORITES_DATA_LOCAL_STORAGE)) || []
            set(() => ({
                favoritesData: result
            }))
        },
        saveDeleteFavoritesTime: async () => {
            const ids = get().favoritesIds
            const {getCityTime} = fetchCityTimeApi()

            let result = []
            const delay = 1500

            for (const i in ids){
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const completed = true
                        completed ? resolve('ok') : reject('no')
                    }, delay)
                })
                try {
                    const item = await getCityTime(ids[i])  
                    result.push(item)
                } catch(error) {
                    console.error(error)
                }
            }
    
            localStorage.setItem(FAVORITES_TIME_LOCAL_STORAGE, JSON.stringify(result));

            set(() => ({
                favoritesTime: result
            }))

            return result
        },
        getFavoritesTime: () => {
            const result = JSON.parse(localStorage.getItem(FAVORITES_TIME_LOCAL_STORAGE)) || []
            set(() => ({
                favoritesTime: result
            }))
        }
    }
})

export default useFavorites