import { useState } from 'react'

import Add from './components/Add'
import Delete from './components/Delete'

import useFavorites from '../../../../state/useFavorites'

import { FAVORITES_LIMIT } from '../../../../utils/constants'

import styles from './City.module.css'

const City = ({id, city, country}) => {

    const {favoritesIds, totalFavorites, favoritesData, saveDeleteFavoritesIds, saveDeleteFavoritesData, getFavoritesData} = useFavorites()
    const [isFavorite, setIsFavorite] = useState(favoritesIds.includes(id)) 

    const toggleFavorite = (id) => {
        setIsFavorite(!favoritesIds.includes(id))
    }

    return (
        <>
            <div className={styles.cityContainer}>
                <li className={styles.locationText}>{`${city}, ${country}`}</li>
                <div className={styles.favoriteButton}>
                    {isFavorite ? <Delete id={id} saveDeleteFavoritesIds={saveDeleteFavoritesIds} saveDeleteFavoritesData={saveDeleteFavoritesData} toggleFavorite={toggleFavorite} /> : 
                    !isFavorite && totalFavorites < FAVORITES_LIMIT ? <Add id={id} saveDeleteFavoritesIds={saveDeleteFavoritesIds} saveDeleteFavoritesData={saveDeleteFavoritesData} toggleFavorite={toggleFavorite} /> : 
                    null}
                </div>
            </div>
        </>
    )
}

export default City