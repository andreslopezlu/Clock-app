import { useState } from 'react'

import Delete from './components/Delete'

import useFavorites from '../../../../state/useFavorites'

import styles from './Favorite.module.css'

const Favorite = ({id, city, country}) => {

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
                    {isFavorite ? <Delete id={id} saveDeleteFavoritesIds={saveDeleteFavoritesIds} saveDeleteFavoritesData={saveDeleteFavoritesData} toggleFavorite={toggleFavorite} /> : null}
                </div>
            </div>
        </>
    )
}

export default Favorite