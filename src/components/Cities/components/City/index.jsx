import { useState } from 'react'

import Add from './components/Add'

import useFavorites from '../../../../state/useFavorites'

import { FAVORITES_LIMIT } from '../../../../utils/constants'

import styles from './City.module.css'

const City = ({id, city, country}) => {

    const {favoritesIds, totalFavorites, favoritesData, favoritesTime, saveDeleteFavoritesIds, saveDeleteFavoritesData, saveDeleteFavoritesTime, getFavoritesData, getFavoritesTime} = useFavorites()
    const [isFavorite, setIsFavorite] = useState(favoritesIds.includes(id)) 

    const toggleFavorite = (id) => {
        setIsFavorite(!favoritesIds.includes(id))
    }

    return (
        <>
            <div className={styles.cityContainer}>
                <li className={styles.locationText}>{`${city}, ${country}`}</li>
                <div className={styles.favoriteButton}>
                    {
                        !isFavorite && totalFavorites < FAVORITES_LIMIT ? 
                        <Add id={id} saveDeleteFavoritesIds={saveDeleteFavoritesIds} saveDeleteFavoritesData={saveDeleteFavoritesData} saveDeleteFavoritesTime={saveDeleteFavoritesTime} toggleFavorite={toggleFavorite} /> : 
                        null
                    }
                </div>
            </div>
        </>
    )
}

export default City