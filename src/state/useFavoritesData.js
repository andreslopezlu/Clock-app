import { create } from "zustand"

import { FAVORITES_LOCAL_STORAGE } from "../utils/constants"

const useFavoritesData = create((set, get) => {

    const initialFavorites = JSON.parse(localStorage.getItem(FAVORITES_LOCAL_STORAGE)) || []
    const initialTotal = initialFavorites.length

    if(!localStorage.getItem(FAVORITES_LOCAL_STORAGE)) {
        localStorage.setItem(FAVORITES_LOCAL_STORAGE, JSON.stringify([]))
    }

    return {
        favoritesData: initialFavorites,
        totalFavorites: initialTotal,
        saveDeleteFavorites: (id) => {
            const favorites = JSON.parse(localStorage.getItem(FAVORITES_LOCAL_STORAGE))
            const favoriteIndex = favorites.indexOf(id)
            favorites.includes(id) ? favorites.splice(favoriteIndex, 1) : favorites.push(id)
            const total = favorites.length
            localStorage.setItem(FAVORITES_LOCAL_STORAGE, JSON.stringify(favorites));
            set(() => ({
                favoritesData: favorites,
                totalFavorites: total
            }))
        }
    }
})

export default useFavoritesData