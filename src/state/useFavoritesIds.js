import { create } from "zustand"

import { FAVORITES_IDS_LOCAL_STORAGE } from "../utils/constants"

const useFavoritesIds = create((set, get) => {

    const initialFavorites = JSON.parse(localStorage.getItem(FAVORITES_IDS_LOCAL_STORAGE)) || []
    const initialTotal = initialFavorites.length

    if(!localStorage.getItem(FAVORITES_IDS_LOCAL_STORAGE)) {
        localStorage.setItem(FAVORITES_IDS_LOCAL_STORAGE, JSON.stringify([]))
    }

    return {
        favoritesIds: initialFavorites,
        totalFavorites: initialTotal,
        saveDeleteFavorites: (id) => {
            const favorites = JSON.parse(localStorage.getItem(FAVORITES_IDS_LOCAL_STORAGE))
            const favoriteIndex = favorites.indexOf(id)
            favorites.includes(id) ? favorites.splice(favoriteIndex, 1) : favorites.push(id)
            const total = favorites.length
            localStorage.setItem(FAVORITES_IDS_LOCAL_STORAGE, JSON.stringify(favorites));
            set(() => ({
                favoritesIds: favorites,
                totalFavorites: total
            }))
        }
    }
})

export default useFavoritesIds