import { useState } from 'react'

import Add from '../Add'
import Delete from '../Delete'

import useFavoritesData from '../../../../state/useFavoritesData'

import { FAVORITES_LIMIT } from '../../../../utils/constants'

import styles from './City.module.css'

const City = ({id, city, country}) => {

    const {favoritesData, saveDeleteFavorites, totalFavorites} = useFavoritesData()

    const [isFavorite, setIsFavorite] = useState(favoritesData.includes(id)) 

    const toggleFavorite = (id) => {
        setIsFavorite(!favoritesData.includes(id))
    }

    return (
        <>
            <div className={styles.cityContainer}>
                <li className={styles.locationText}>{`${city}, ${country}`}</li>
                <div className={styles.favoriteButton}>
                    {isFavorite ? <Delete id={id} saveDeleteFavorites={saveDeleteFavorites} toggleFavorite={toggleFavorite} /> : 
                    !isFavorite && totalFavorites < FAVORITES_LIMIT ? <Add id={id} saveDeleteFavorites={saveDeleteFavorites} toggleFavorite={toggleFavorite} /> : 
                    null}
                </div>
            </div>
        </>
    )
}

export default City