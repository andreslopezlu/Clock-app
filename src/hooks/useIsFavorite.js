import { useState } from "react"
import { FAVORITES_LOCAL_STORAGE } from "../utils/constants"

const useIsFavorite = (id) => {
    const [isFavorite, setIsFavorite] = useState()
    const favorites = JSON.parse(localStorage.getItem(FAVORITES_LOCAL_STORAGE)) || []
    // setIsFavorite(favorites.includes(id))
    return {isFavorite}
}

export default useIsFavorite    