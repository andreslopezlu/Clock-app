
import { create } from "zustand"

import { FAVORITES_LOCAL_STORAGE } from "../utils/constants"

const useFavoritesData = create((set, get) => {

    const initialFavorites = []

    if(!localStorage.getItem(FAVORITES_LOCAL_STORAGE)) {
        localStorage.setItem(FAVORITES_LOCAL_STORAGE, JSON.stringify([]))
    }

    return {
        favoritesData: initialFavorites,
        toggleFavorites: (id) => {

            const favorites = JSON.parse(localStorage.getItem(FAVORITES_LOCAL_STORAGE))
    
            const favIndex = favorites.indexOf(id)
            
            favorites.includes(id) ? favorites.splice(favIndex, 1) : favorites.push(id)
    
            localStorage.setItem(FAVORITES_LOCAL_STORAGE, JSON.stringify(favorites));
    
            set(() => ({
                favoritesData: favorites
            }))
        }
    }

})

export default useFavoritesData