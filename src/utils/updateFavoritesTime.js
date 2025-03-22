import fetchCityTimeApi from "./fetchCityTimeApi"
import { FAVORITES_IDS_LOCAL_STORAGE } from "./constants"

const updateFavoritesTime = async (controller) => {
    const ids = JSON.parse(localStorage.getItem(FAVORITES_IDS_LOCAL_STORAGE)) || []
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
            const item = await getCityTime(ids[i], controller)  
            result.push(item)
        } catch(error) {
            console.error(error)
        }
    }

    return result
}

export default updateFavoritesTime