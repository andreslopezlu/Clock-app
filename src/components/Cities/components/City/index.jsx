import Add from '../Add'
import Delete from '../Delete'

import styles from './City.module.css'

import useFavoritesData from '../../../../state/useFavoritesData'

import { useState } from 'react'

const City = ({id, city, country}) => {

    const {favoritesData, saveDeleteFavorites} = useFavoritesData()

    const [isFavorite, setIsFavorite] = useState(favoritesData.includes(id)) 

    const toggleFavorite = (id) => {
        setIsFavorite(!favoritesData.includes(id))
    }

    return (
        <>
            <div className={styles.cityContainer}>
                <li className={styles.locationText}>{`${city}, ${country}`}</li>
                <div className={styles.favoriteButton}>
                    {isFavorite ? <Delete id={id} saveDeleteFavorites={saveDeleteFavorites} toggleFavorite={toggleFavorite} /> : <Add id={id} saveDeleteFavorites={saveDeleteFavorites} toggleFavorite={toggleFavorite} />}
                </div>
            </div>
        </>
    )
}

export default City