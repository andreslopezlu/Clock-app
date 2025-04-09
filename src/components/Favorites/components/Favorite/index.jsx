import { useState } from 'react'

import Delete from './components/Delete'

import useFavorites from '../../../../state/useFavorites'

import styles from './Favorite.module.css'

const Favorite = ({id, city, country}) => {

    const {favoritesIds, totalFavorites, favoritesData, favoritesTime, saveDeleteFavoritesIds, saveDeleteFavoritesData, saveDeleteFavoritesTime, getFavoritesData, getFavoritesTime} = useFavorites()

    const [isAdded, setIsAdded] = useState(favoritesIds.includes(id)) 

    const toggleDeleteButton = (id) => {
        setIsAdded(!favoritesIds.includes(id))
    }

    return (
        <>
            <div className={styles.cityContainer}>
                <li className={styles.locationText}>{`${city}, ${country}`}</li>
                <div className={styles.favoriteButton}>
                    {isAdded ? <Delete id={id} saveDeleteFavoritesIds={saveDeleteFavoritesIds} saveDeleteFavoritesData={saveDeleteFavoritesData} saveDeleteFavoritesTime={saveDeleteFavoritesTime} toggleDeleteButton={toggleDeleteButton} /> : null}
                </div>
            </div>
        </>
    )
}

export default Favorite