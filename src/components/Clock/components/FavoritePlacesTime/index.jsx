import { useDeferredValue, useEffect, useState } from "react"
import FavoritePlaceTime from "./components/FavoritePlaceTime"

import useFavorites from "../../../../state/useFavorites"

const FavoritePlacesTime = ({time}) => {

    const {favoritesIds, totalFavorites, favoritesData, favoritesTime, saveDeleteFavoritesIds, saveDeleteFavoritesData, saveDeleteFavoritesTime, getFavoritesData, getFavoritesTime} = useFavorites()
    
    useEffect(() => {
        getFavoritesTime()
        getFavoritesData()
    }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         saveDeleteFavoritesTime()
    //     }, 2000);
    //     getFavoritesTime()
    // }, [time])

    console.log('favs', favoritesData)

    console.log('times', favoritesTime)
    
    const renderFavoritesTime = () => {
        let result = []
        for (const i in favoritesData) {
            const id = favoritesData[i].data.id
            const city = favoritesData[i].data.city
            const country = favoritesData[i].data.countryCode
            const time = favoritesTime[i].data.slice(0, 5)

            console.log('se renderiza')
            console.log('estoy aquiiii')
            
            const item = <FavoritePlaceTime key={id} id={id} city={city} country={country} time={time} />
            result.push(item)
        }
        return result
    }
    
    return (
        <ul>
            {renderFavoritesTime()}
        </ul>
    )
}

export default FavoritePlacesTime